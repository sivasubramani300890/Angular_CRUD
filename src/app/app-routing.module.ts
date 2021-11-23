import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';
import { ListProgramComponent } from './list-program/list-program.component';  
import { AddProgramComponent } from './add-program/add-program.component'; 
import { ListEpgComponent } from './list-epg/list-epg.component';  
import { AddEpgComponent } from './add-epg/add-epg.component'; 
import { LoginCompComponent } from './login-comp/login-comp.component'; 
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { LayoutCompComponent } from './layout-comp/layout-comp.component';

const routes: Routes = [
  { path: '', component: LoginCompComponent, pathMatch: 'full' },  
  { path: 'list-program', component: ListProgramComponent },  
  { path: 'add-program', component: AddProgramComponent },
  { path: 'list-epg', component: ListEpgComponent },  
  { path: 'add-epg', component: AddEpgComponent },
  { path: 'login-comp', component: LoginCompComponent } ,
  { path: 'header-comp', component: HeaderCompComponent } ,
  { path: 'footer-comp', component: FooterCompComponent },
  { path: 'layout-comp', component: LayoutCompComponent },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
    // canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
