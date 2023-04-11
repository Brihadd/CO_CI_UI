import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrderService} from "../../../services/order.service";
import { OrderParametr } from 'src/app/models/orderparametr';
import { OrderState } from 'src/app/models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  OrdersList: any = [];
  orderparametr: OrderParametr=new OrderParametr(null,null,null,OrderState.Default,null,null);
  

  ngOnInit() {
    this.loadOrders();
  }
  constructor(
    public orderService: OrderService,
    private router: Router,
    private ngZone: NgZone,
  ){ }
   // Categgory list
   
   loadOrders() {

    return this.orderService.GеtOrdersByParametr(this.orderparametr).subscribe((data: {}) => {
      this.OrdersList = data;
    })
  }
  clickMethod(order: any) {
    if(confirm("Are you sure to delete this order")) {
      console.log("Implement delete functionality here");
      this.deleteOrder(order);
    }
  }
    // Delete issue
    deleteOrder(data:any){
      var index:any = index = this.OrdersList.map((x: { name: any; }) => {return x.name}).indexOf(data.name);
       return this.orderService.DeleteOrder(data.id).subscribe(res => {
        this.loadOrders();
       })
    }
}