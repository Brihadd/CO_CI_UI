import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeArr: any = [];
  ngOnInit() {
    this.CreateEmployee();
  }
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public employeeService: EmployeeService
  ) {}
  CreateEmployee() {
    this.employeeForm = this.fb.group({
      name: [''],
    });
  }
  submitForm() {
    this.employeeService.CreateEmployee(this.employeeForm.value).subscribe((res:any) => {
      console.log('Employee added!');
      this.ngZone.run(() => this.router.navigateByUrl('/employee-list'));
    });
  }
}
