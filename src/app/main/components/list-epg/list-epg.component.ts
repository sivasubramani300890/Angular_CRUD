import { Component, OnInit } from '@angular/core';  
import { ProgramService } from '../../service/program.service';  
import { Program } from '../../program.model';  
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-epg',
  templateUrl: './list-epg.component.html',
  styleUrls: ['./list-epg.component.css']
})
export class ListEpgComponent implements OnInit {

 employees: any[] = [];
 colors: any[] = [];
 newVar:any; newVar1:any;

  constructor(private empService: ProgramService, private router: Router, ) { }

  ngOnInit(): void {
    this.getcur();
    this.getEpgs1();
    this.colors=["#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8","#FCF3CF","#D1F2EB","#FADBD8"];
  }

  getcur(){
    let toArray =  window.location.pathname.split("/");
    this.newVar = toArray[toArray.length - 1];

    if(this.newVar === 'list-epg') { this.newVar1 = 0; } else { this.newVar1 = 1; }
        //alert(this.newVar1);
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
    this.router.navigate(['/main/add-epg']);

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
    this.router.navigate(['/main/add-epg'], { queryParams: { empId: program_id} });
  }
  logout() {
    this.router.navigate(['/main/login-comp']);
    this.empService.showError("Logged out Successfully !!", "Demo Project")
  }

}
