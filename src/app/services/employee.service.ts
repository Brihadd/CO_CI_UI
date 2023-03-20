import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../models/employee";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl = 'https://localhost:7222';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseurl + '/api/Employee/GetAllEmployees').pipe(retry(1), catchError(this.errorHandl));
  }

  CreateEmployee(employee: Employee) : Observable<boolean>{
    return this.http.post<boolean>(
      this.baseurl + '/api/Employee/CreateEmployee',
      JSON.stringify(Employee),
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl));
  }
  GetEmployeeById(id: any): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/api/Employee/GetEmployeeById?id=' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  DeleteEmployee(id: number) {
    return this.http
      .delete<Employee>(this.baseurl + '/api/Employee/DeleteEmployee?id=' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  UpdaEmployee(id:any, data:Employee): Observable<Employee> {
    data.id=id;
    return this.http
      .put<Employee>(
        this.baseurl + '/api/Employee/UpdateEmployee',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error : any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

