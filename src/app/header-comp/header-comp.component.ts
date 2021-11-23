import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProgramService } from '../service/program.service';  
import { Program } from '../program.model';  

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

newVar:any;
  constructor(private empService: ProgramService, private router: Router,) { }

  ngOnInit(): void {
    let toArray =  window.location.pathname.split("/");
    this.newVar = toArray[toArray.length - 1];
        //alert(this.newVar);
  }

listProgram() {
    this.router.navigate(['/list-program']);
     this.empService.showSuccess("Program Details Listed !!", "Demo Project")
  }

  listEPG() {
    this.router.navigate(['/list-epg']);
    this.empService.showSuccess("Channel Details Listed !!", "Demo Project")
  }
  logout() {
    this.router.navigate(['/login-comp']);
    this.empService.showError("Logged out Successfully !!", "Demo Project")
  }

}
