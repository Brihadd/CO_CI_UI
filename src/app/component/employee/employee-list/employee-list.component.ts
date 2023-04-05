import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  EmployeesList: any = [];

  ngOnInit() {
    this.loadEmployees();
  }
  constructor(
    public employeeService: EmployeeService,
    private router: Router,
    private ngZone: NgZone,
  ){ }
   // Categgory list
   
   loadEmployees() {
    return this.employeeService.GetAllEmployees().subscribe((data: {}) => {
      this.EmployeesList = data;
    })
  }
  clickMethod(employee: any) {
    if(confirm("Are you sure to delete this category")) {
      console.log("Implement delete functionality here");
      this.deleteEmployee(employee);
    }
  }
    // Delete issue
    deleteEmployee(data:any){
      var index:any = index = this.EmployeesList.map((x: { name: any; }) => {return x.name}).indexOf(data.name);
       return this.employeeService.DeleteEmployee(data.id).subscribe(res => {
        this.loadEmployees();
       })
    }
}