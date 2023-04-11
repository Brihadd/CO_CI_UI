import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Invoice} from "../models/invoice";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Baseurl } from '../models/baseurl';
import { InvoiceParametr } from '../models/invoiceparametr';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseurl = Baseurl.baseurl;

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  
  GetInvoicesByParametr(invoiceparametr:InvoiceParametr): Observable<Invoice[]>{
    return this.http
      .put<Invoice[]>(
        this.baseurl + '/api/Order/GetInvoicesByParameters',
        JSON.stringify(invoiceparametr),
        this.httpOptions
        )
        .pipe(retry(1), catchError(this.errorHandl));
  }

  CreateInvoice(invoice: Invoice) : Observable<boolean>{
    return this.http.post<boolean>(
      this.baseurl + '/api/Invoice/CreateInvoice',
      JSON.stringify(invoice),
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl));
  }

  DeleteInvoice(id: number) {
    return this.http
      .delete<Invoice>(this.baseurl + '/api/Employee/DeleteInvoice?id=' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  UpdateInvoice(id:any, data:Invoice): Observable<Invoice> {
    data.invoiceId=id;
    return this.http
      .put<Invoice>(
        this.baseurl + '/api/Invoice/UpdateInvoice',
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

