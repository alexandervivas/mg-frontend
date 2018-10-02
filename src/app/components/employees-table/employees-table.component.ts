import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesTableComponent implements OnInit {

  employees: Array<Employee> = [];
  employeeID: string = '';

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
  }

  getEmployees() {
    if(this.employeeID === '') {
      this.employeesService.getEmployees().subscribe(
        response => this.employees = response,
        error => console.error(error)
      );
    }
    else {
      this.employeesService.getEmployee(Number(this.employeeID)).subscribe(
        response => this.employees = [response],
        error => console.error(error)
      );
    }
  }

}
