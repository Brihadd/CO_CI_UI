import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/employee/edit-employe/edit-employe.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-login' },
  { path: 'app-login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employe', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
