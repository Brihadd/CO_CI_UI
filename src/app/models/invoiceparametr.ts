import {InvoiceState} from "../models/invoice";

export class InvoiceParametr{
    id:number | null=0
    contractorId:number | null=0
    invoiceState:InvoiceState=InvoiceState.Default
    searchPaymentDeadlineFromDate:Date = new Date("1970-01-01")
    searchPaymentDeadlineUpToDate:Date = new Date("1970-01-01")
  }

