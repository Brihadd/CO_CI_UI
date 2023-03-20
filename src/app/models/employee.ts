export class Employee{
   id:number=0
   name:string=''
   surname:string=''
   phonenumber:string=''
   userStatus: UserStatus=UserStatus.Manager 
   email:string=''
   birthDate:Date = new Date("1970-01-01")
   deleted:boolean=false 
}
enum UserStatus{
    Accountant,
    BackOffice,
    Contractor,
    Manager
}