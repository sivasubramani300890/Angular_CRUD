import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProgramService } from '../../service/program.service';  
import { Program } from '../../program.model';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  newVar:any; newVar1:any;
  constructor(private empService: ProgramService, private router: Router,) { }

  ngOnInit(): void {
    let toArray =  window.location.pathname.split("/");
    this.newVar = toArray[toArray.length - 1];

    if(this.newVar === 'list-epg') { this.newVar1 = 1; } else { this.newVar1 = 0; }
        //alert(this.newVar1);
  }

listProgram() {
    this.router.navigate(['/main/list-program']);
     this.empService.showSuccess("Program Details Listed !!", "Demo Project")
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
