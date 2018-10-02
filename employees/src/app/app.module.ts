import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeeRowComponent } from './components/employee-row/employee-row.component';

import { EmployeesService } from './services/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    EmployeeRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
