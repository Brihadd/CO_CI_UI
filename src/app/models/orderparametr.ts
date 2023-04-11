import {OrderState} from "../models/order";

export class OrderParametr{
    id:number | null=null
    departmentId:number | null=null
    contractorId:number | null=null
    orderState:OrderState=OrderState.Default
    searchFromDate:Date| null = null
    searchUpToDate:Date| null = null

    constructor(id:number | null,departmentId:number | null,
    contractorId:number | null,orderState:OrderState,
    searchFromDate:Date| null,searchUpToDate:Date| null){
     this.id=id
     this.departmentId=departmentId
     this.contractorId=contractorId
     this.orderState=orderState
     this.searchFromDate=searchFromDate
     this.searchUpToDate=searchUpToDate
    }
  }
 

