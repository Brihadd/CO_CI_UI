import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})

export class EditEmployeeComponent implements OnInit {
  EmployeesList: any = [];
  updateEmployeeForm!: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public employeeService: EmployeeService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.employeeService.GetEmployeeById(id).subscribe((data) => {
      this.updateEmployeeForm = this.fb.group({
        name: [data.name],
        surname:[data.surname],
        phonenumber:[data.phoneNumber],
        email:[data.email],
        birthDate:[data.birthDate],
      })
    })
  }
  updateForm(){
    this.updateEmployeeForm = this.fb.group({
      name: [''],
      surname: [''],
      phonenumber: [''],
      email: [''],
      birthDate: [new Date("1970-01-01")]
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.employeeService.UpdateEmployee(id, this.updateEmployeeForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/employee-list'))
    })
  }
}