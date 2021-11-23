import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { ProgramService } from '../service/program.service';  
import { Router, ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {

addForm: FormGroup; 
editEmpId: any = '';

  constructor(
    private empService: ProgramService, 
    private router: Router,
    private aRoute: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private _location: Location,
  ) { 
    this.addForm = this.formBuilder.group({  
       program_title: ['', Validators.required],   
       program_age: [''] ,
       program_description: ['', Validators.required], 
       program_type: ['', Validators.required]  
    }); 
  }

  ngOnInit(): void {
     this.aRoute.queryParams.subscribe((data) => {
      console.log('query params =>', data);
      this.editEmpId = data.empId;
      this.editEmpId ? this.getEmployeeById() : '';
    })
  }

  getEmployeeById() {
    this.empService.getEmployeeById(this.editEmpId)  
      .subscribe((data: any) => {  
        //console.log('emp detail =>', data.data_details);
        this.addForm.patchValue(data.data_details[0]);  
      },  
      (error: any) => {  
        //alert(JSON.stringify(error));  
      }); 
  }

  onSubmit() {  
    console.log('Create fire');  
    const formData: any = {};
    formData.program_title = this.addForm.value.program_title;
    formData.program_description = this.addForm.value.program_description;
    formData.program_type = this.addForm.value.program_type;
    formData.program_age = this.addForm.value.program_age;
    this.empService.createUser(formData)  
      .subscribe(data => {  
        //console.log(JSON.stringify(data));
        this.empService.showSuccess("Program Data Saved successfully !!", "Demo Project")
        this.router.navigate(['list-program']);  
      },  
      error => {  
        //alert(JSON.stringify(error));  
      });  
  }  
  onUpdate() {  
    console.log('Update fire');  
    const formData: any = {};
    formData.program_title = this.addForm.value.program_title;
    formData.program_description = this.addForm.value.program_description;
    formData.program_type = this.addForm.value.program_type;
    formData.program_age = this.addForm.value.program_age;
    formData.program_id = this.editEmpId;
    this.empService.updateEmployee(formData).subscribe(data => {  
      this.editEmpId = '';
      this.empService.showSuccess("Program Data Updated successfully !!", "Demo Project")
      this.router.navigate(['list-program']);  
    },  
      error => {  
        //alert(error);  
      });  
  }  
  backClicked() {
    this._location.back();
  }
}
