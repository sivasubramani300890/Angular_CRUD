import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ListProgramComponent } from './list-program/list-program.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { ProgramService } from './service/program.service';
import { ListEpgComponent } from './list-epg/list-epg.component';
import { AddEpgComponent } from './add-epg/add-epg.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { LayoutCompComponent } from './layout-comp/layout-comp.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ListProgramComponent,
    AddProgramComponent,
    ListEpgComponent,
    AddEpgComponent,
    LoginCompComponent,
    HeaderCompComponent,
    FooterCompComponent,
    LayoutCompComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
