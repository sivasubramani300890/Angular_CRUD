import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { AddProgramComponent } from './components/add-program/add-program.component';
import { AddEpgComponent } from './components/add-epg/add-epg.component';
import { ListEpgComponent } from './components/list-epg/list-epg.component';

const routes: Routes = [{
  path: '',
  component: FullLayoutComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'list-program',
    component: ListProgramComponent
  },
  {
    path: 'add-program',
    component: AddProgramComponent
  },
  {
    path: 'list-epg',
    component: ListEpgComponent
  },
  {
    path: 'add-epg',
    component: AddEpgComponent
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
