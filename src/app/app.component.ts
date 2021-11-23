import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectNew';
  newVar: any; 
  nowVar : any;

  showHeader: boolean = false;

  constructor(private router: Router, public location: Location ){
      let currentUrl = this.location.path();
        if (currentUrl !== '/login-comp') {
          console.log('currentUrl 2 =>', currentUrl);
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }


  }

ngOnInit() {  
   
}
}
