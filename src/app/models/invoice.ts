import {Expense} from "../models/expence";

export class Invoice{
    invoiceId:number=0
    contractorId:number=0
    contractorName :string=''
    contractorEmail:string=''
    contractorPhoneNumber:string=''
    contractorOrder:string=''
    vatPayer:boolean=false 
    bankAccountNumber:number=0
    address:string=''
    period:string=''
    paymentDeadline:Date = new Date("1970-01-01")
    currency:Сurrency=Сurrency.EUR
    invoiceState:InvoiceState=InvoiceState.Default
    hoursCount:number=0
    hourRate:number=0
    taxRate:number=0
    expenses:Expense[]=[]
    expensesAmount:number=0
    amount:number=0
    vATAmount:number=0
 }
export enum Сurrency
    {
        USD,
        RUB,
        EUR
    }
 export enum InvoiceState
    {
        New,
        Canceled,
        ManagerApproved,
        ManagerRejected,
        AccountantApproved,
        AccountantRejected,
        Default
    }