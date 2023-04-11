import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../models/order";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Baseurl } from '../models/baseurl';
import { OrderParametr } from '../models/orderparametr';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseurl = Baseurl.baseurl;;

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GеtOrdersByParametr(orderparametr:OrderParametr): Observable<Order[]>{
    return this.http
      .post<Order[]>(
        this.baseurl + '/api/Order/GetOrdersByParameters',
        JSON.stringify(orderparametr),
        this.httpOptions
        )
        .pipe(retry(1), catchError(this.errorHandl));
  }

  CreateOrder(order: Order) : Observable<boolean>{
    return this.http.post<boolean>(
      this.baseurl + '/api/Order/CreateOrder',
      JSON.stringify(order),
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl));
  }
 
  DeleteOrder(id: number) {
    return this.http
      .delete<Order>(this.baseurl + '/api/Order/DeleteOrder?id=' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  UpdateOrder(id:any, data:Order): Observable<Order> {
    data.id=id;
    return this.http
      .put<Order>(
        this.baseurl + '/api/Order/UpdateOrder',
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

