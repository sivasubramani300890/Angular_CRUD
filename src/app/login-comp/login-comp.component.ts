import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProgramService } from '../service/program.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

addForm: FormGroup; 
  constructor(  private formBuilder: FormBuilder, private empService: ProgramService, private router: Router,) { 
this.addForm = this.formBuilder.group({  
       username: ['', Validators.required],   
       password: ['', Validators.required] 
    }); 
  }

  ngOnInit(): void {
  }

  onSubmit() {  
    const formData: any = {};
    formData.username = this.addForm.value.username;
    formData.password = this.addForm.value.password;

    if(formData.username == 'admin' && formData.password == 'admin'){
      this.router.navigate(['main/list-program']); 
      this.empService.showSuccess("Login successfull !!", "Demo Project") 
    }else{

      this.empService.showError("Wrong Credetials!!", "Demo Project")
    }
  }

}
