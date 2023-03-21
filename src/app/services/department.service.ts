import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Department} from "../models/department";
import {Baseurl} from "../models/baseurl";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseurl = Baseurl.baseurl;

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetAllDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.baseurl + '/api/Department/GetAllDepartments').pipe(retry(1), catchError(this.errorHandl));
  }

  CreateDepartment(department: Department) : Observable<boolean>{
    return this.http.post<boolean>(
      this.baseurl + '/api/Department/CreateDepartment',
      JSON.stringify(department),
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl));
  }
  GetDepartmentById(id: any): Observable<Department> {
    return this.http
      .get<Department>(this.baseurl + '/api/Department/GetDepartmentById?id=' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  DeleteDepartment(id: number) {
    return this.http
      .delete<Department>(this.baseurl + '/api/Department/DeleteDepartment?id=' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  UpdateDepartment(id:any, data:Department): Observable<Department> {
    data.id=id;
    return this.http
      .put<Department>(
        this.baseurl + '/api/Department/UpdateDepartment',
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

