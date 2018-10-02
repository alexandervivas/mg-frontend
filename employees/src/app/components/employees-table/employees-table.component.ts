import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
