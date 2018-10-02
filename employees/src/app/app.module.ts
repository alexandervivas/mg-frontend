import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeeRowComponent } from './employee-row/employee-row.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    EmployeeRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
