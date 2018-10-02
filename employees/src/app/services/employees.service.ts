import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee'
import { Observable } from 'rxjs'

@Injectable()
export class EmployeesService {

  constructor(private http:Http) { }

  getEmployees(): Observable<Array<Employee>> {
    return this.http.get(`${environment.apiURL}employees`).map(response => response.json().map(this.toEmployee));
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get(`${environment.apiURL}employees/${id}`).map(response => this.toEmployee(response.json()));
  }

  toEmployee(e: any): Employee {
    return <Employee> {
      id:e.id,
      name:e.name,
      contractTypeName:e.contractTypeName,
      roleId:e.roleId,
      roleName:e.roleName,
      roleDescription:e.roleDescription,
      hourlySalary:e.hourlySalary,
      monthlySalary:e.monthlySalary,
      annualSalary:e.annualSalary
    }
  }

}
