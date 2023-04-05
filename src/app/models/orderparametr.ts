import {OrderState} from "../models/order";

export class InvoiceParametr{
    id:number | null=0
    departmentId:number | null=0
    contractorId:number | null=0
    orderState:OrderState=OrderState.Default
    searchFromDate:Date = new Date("1970-01-01")
    searchUpToDate:Date = new Date("1970-01-01")
  }
 

