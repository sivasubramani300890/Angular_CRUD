import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { ProgramService } from '../service/program.service';  
import { Router, ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-epg',
  templateUrl: './add-epg.component.html',
  styleUrls: ['./add-epg.component.css']
})
export class AddEpgComponent implements OnInit {
  addForm: FormGroup; 
  editEmpId: any = '';
  employees: any[] = []; 

  constructor(
    private empService: ProgramService, 
    private router: Router,
    private aRoute: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private _location: Location,
    ) {
  this.addForm = this.formBuilder.group({  
       channel_name: ['', Validators.required],   
       program_id: ['', Validators.required] ,
       epg_date: ['', Validators.required], 
       epg_start_time: [''] ,
       epg_end_time: ['']  
    }); 
     }

  ngOnInit(): void {
    this.getEmp();
    this.aRoute.queryParams.subscribe((data) => {
      console.log('query params =>', data);
      this.editEmpId = data.empId;
      this.editEmpId ? this.getEpgById() : '';
    })
  }

  showToasterSuccess(){
      this.empService.showSuccess("Data shown successfully !!", "New Project")
  }

  getEmp() {
    this.empService.getEmployees()  
      .subscribe((data: any) => {  
        console.log('data =>', data);
        this.employees = data.data_details; 
        
      });  
  }
  getEpgById() {
    this.empService.getEpgById(this.editEmpId)  
      .subscribe((data: any) => {  
        console.log('emp detail =>', data.data_details);
        this.addForm.patchValue(data.data_details[0]);  
      },  
      (error: any) => {  
        //alert(JSON.stringify(error));  
      }); 
  }

  onSubmit() {  
    console.log('Create fire');  
    const formData: any = {};
    formData.channel_name = this.addForm.value.channel_name;
    formData.program_id = this.addForm.value.program_id;
    formData.epg_date = this.addForm.value.epg_date;
    formData.epg_start_time = this.addForm.value.epg_start_time;
    formData.epg_end_time = this.addForm.value.epg_end_time;
    this.empService.createEpg(formData)  
      .subscribe((data:any) => {  
        //alert(JSON.stringify(data));
        this.empService.showSuccess("Data Saved successfully !!", "Demo Project")
        this.router.navigate(['list-epg']);  
      },  
      (error : any) => {  
        //alert(JSON.stringify(error));  
      });  
  }  
  onUpdate() {  
    console.log('Update fire');  
    const formData: any = {};
     formData.channel_name = this.addForm.value.channel_name;
    formData.program_id = this.addForm.value.program_id;
    formData.epg_date = this.addForm.value.epg_date;
    formData.epg_start_time = this.addForm.value.epg_start_time;
    formData.epg_end_time = this.addForm.value.epg_end_time;
    formData.channel_id = this.editEmpId;
    this.empService.updateEpg(formData).subscribe(data => {  
      this.editEmpId = '';
      this.empService.showSuccess("Data Updated successfully !!", "Demo Project")
      this.router.navigate(['list-epg']);  
    },  
      error => {  
        //alert(error);  
      });  
  }  
  backClicked() {
    this._location.back();
  }

}
