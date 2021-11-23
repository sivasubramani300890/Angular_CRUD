import { Component, OnInit } from '@angular/core';  
import { ProgramService } from '../../service/program.service';  
import { Program } from '../../program.model';  
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {

 employees: any[] = [];
   colors: any[]= []; 
   newVar:any; newVar1:any;
  
  constructor(private empService: ProgramService, private router: Router, ) { }  
  
  ngOnInit() {  
     this.getcur();
    this.getEmp();
    this.colors=["#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8"];
  }  

  getcur(){
    let toArray =  window.location.pathname.split("/");
    this.newVar = toArray[toArray.length - 1];

    if(this.newVar === 'list-epg') { this.newVar1 = 0; } else { this.newVar1 = 1; }
        //alert(this.newVar1);
  }

  getEmp() {
    this.empService.getEmployees()  
      .subscribe((data: any) => {  
        console.log('data =>', data);
        this.employees = data.data_details; 
      });  
  }

  deleteEmp(program_id: number): void {  
    if(confirm("Are you sure to delete ")){
     
    this.empService.deleteEmployees(program_id)  
      .subscribe(data => {  
        this.getEmp();
        this.empService.showSuccess("Program Data Deleted successfully !!", "Demo Project")
      })  
    }
  }  
  editEmp(program_id: number): void {  
    // localStorage.removeItem('editEmpId');  
    // localStorage.setItem('editEmpId', program_id);  
    this.router.navigate(['/main/add-program'], { queryParams: { empId: program_id} });
  }

  addEmployee() {
    this.router.navigate(['/main/add-program']);
  }

  listEPG() {
    this.router.navigate(['/main/list-epg']);
    this.empService.showSuccess("Channel Details Listed !!", "Demo Project")
  }

  logout() {
    this.router.navigate(['/login-comp']);
    this.empService.showError("Logged out Successfully !!", "Demo Project")
  }


}
