import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesTableComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    console.log('service',this.employeesService.getEmployees());
  }

}
