import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Program } from '../program.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  message : any;
title : any;
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  baseUrl: string = 'http://localhost:80/blog_new/public/api/admin/';


  showSuccess(message:any, title:any){
      this.toastr.success(message, title,{  timeOut: 2000, })
  }
  showError(message:any, title:any){
      this.toastr.error(message, title,{  timeOut: 2000, })
  }

  getEmployees() {
    return this.http.get(this.baseUrl +'datadisp', { headers: this.getCustomHeaders() });  
  }  
  getEpgs() {
    return this.http.get(this.baseUrl +'epgdatadisp', { headers: this.getCustomHeaders() });  
  }  
  deleteEmployees(id: number) {  
    return this.http.delete(this.baseUrl +'deletedatadisp/'+ id, { headers: this.getCustomHeaders() });  
  } 
  deleteEpg(id: number) {  
    return this.http.delete(this.baseUrl +'epgdeletedatadisp/'+ id, { headers: this.getCustomHeaders() });  
  }  
  createUser(employee: Program) {  
    return this.http.post(this.baseUrl +'savedatadisp', employee, {headers: this.getCustomHeaders()});   
  }  
  createEpg(employee: Program) {  
      return this.http.post(this.baseUrl +'epgsavedatadisp', employee, { headers: this.getCustomHeaders() });    
  }  
  getEmployeeById(id: number) {  
    return this.http.get(this.baseUrl +'datadisp'+ '/' + id, { headers: this.getCustomHeaders() });  
  } 
  getEpgById(id: number) {  
    return this.http.get(this.baseUrl +'epgdatadisp'+ '/' + id, { headers: this.getCustomHeaders() });  
  }  
  updateEmployee(employee: any) {  
    return this.http.put(this.baseUrl + 'updatedatadisp/' + employee.program_id, employee, { headers: this.getCustomHeaders() });  
  }
  updateEpg(employee: any) {  
    return this.http.put(this.baseUrl + 'epgupdatedatadisp/' + employee.channel_id, employee, { headers: this.getCustomHeaders() });  
  }

  getCustomHeaders(): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('Authorization', 'my-secret-token');
    return httpHeaders;
  }
}
