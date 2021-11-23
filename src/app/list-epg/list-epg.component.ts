import { Component, OnInit } from '@angular/core';  
import { ProgramService } from '../service/program.service';  
import { Program } from '../program.model';  
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-epg',
  templateUrl: './list-epg.component.html',
  styleUrls: ['./list-epg.component.css']
})
export class ListEpgComponent implements OnInit {
   employees: any[] = [];
  constructor(private empService: ProgramService, private router: Router, ) { }

  ngOnInit(): void {
  
    this.getEpgs1();
  }

  listProgram() {
    this.router.navigate(['/list-program']);
     this.empService.showSuccess("Program Details Listed !!", "Demo Project")
  }

  getEpgs1() {
    this.empService.getEpgs()  
      .subscribe((data: any) => {  
        console.log('data =>', data);
        this.employees = data.data_details; 
      });  
  }

  addEpg() {
    this.router.navigate(['/add-epg']);

  }

  deleteEmp(program_id: number): void {  
     if(confirm("Are you sure to delete ")){
    this.empService.deleteEpg(program_id)  
      .subscribe(data => {  
        this.getEpgs1();
         this.empService.showSuccess("Channel Detail Deleted Successfully !!", "Demo Project")
      })  
    }
  }  
  editEmp(program_id: number): void {   
    this.router.navigate(['/add-epg'], { queryParams: { empId: program_id} });
  }
  logout() {
    this.router.navigate(['/login-comp']);
    this.empService.showError("Logged out Successfully !!", "Demo Project")
  }
}
