import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEnterprisesComponent } from './home/enterprises/add-enterprises/add-enterprises.component';
import { EditEnterprisesComponent } from './home/enterprises/edit-enterprises/edit-enterprises.component';
import { ListEnterprisesComponent } from './home/enterprises/list-enterprises/list-enterprises.component';
import { ListDepartmentsComponent } from './home/departments/list-departments/list-departments.component';
import { AddDepartmentsComponent } from './home/departments/add-departments/add-departments.component';
import { EditDepartmentsComponent } from './home/departments/edit-departments/edit-departments.component';
import { AddEmployeessComponent } from './home/employeess/add-employeess/add-employeess.component';
import { ListEmployeessComponent } from './home/employeess/list-employeess/list-employeess.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEnterprisesComponent,
    EditEnterprisesComponent,
    ListEnterprisesComponent,
    ListDepartmentsComponent,
    AddDepartmentsComponent,
    EditDepartmentsComponent,
    AddEmployeessComponent,
    ListEmployeessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
