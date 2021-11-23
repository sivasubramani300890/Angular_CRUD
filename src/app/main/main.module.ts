import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule} from 'ngx-pagination';

import { MainRoutingModule } from './main-routing.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { AddProgramComponent } from './components/add-program/add-program.component';
import { AddEpgComponent } from './components/add-epg/add-epg.component';
import { ListEpgComponent } from './components/list-epg/list-epg.component';


@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ListProgramComponent,
    AddProgramComponent,
    AddEpgComponent,
    ListEpgComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class MainModule { }
