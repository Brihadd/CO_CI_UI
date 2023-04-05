export class Order{
    id:number=0
    orderCode:string=''
    contractorId:string=''
    contractorName:string=''
    departmentId:string=''
    departmentName:string=''
    startDate:Date = new Date("1970-01-01")
    endDate:Date = new Date("1970-01-01")
    hourRate:number=0
    mDRate:number=0
    orderState:OrderState=OrderState.New
    info:string=''
  }
  export enum OrderState{
    New,
    Canceled,
    ManagerApproved,
    ContractorApproved,
    Active,
    Expired,
    Default
}
