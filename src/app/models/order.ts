export class Order{
    id:number=0
    orderCode:string=''
    contractorId:string=''
    contractorFullName:string=''
    departmentId:string=''
    departmentName:string=''
    startDate:Date = new Date("1970-01-01")
    endDate:Date = new Date("1970-01-01")
    hourRate:number=0
    mDRate:number=0
    orderState:OrderState=OrderState.Default
    info:string=''
  }
  export enum OrderState{
    Order,
    Canceled,
    ManagerApproved,
    ContractorApproved,
    Active,
    Expired,
    Default
}
