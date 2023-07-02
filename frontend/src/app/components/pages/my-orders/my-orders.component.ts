import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

// id!:number;
//   items!: CartItem[];
//   totalPrice!:number;
//   name!: string;
//   paymentId!: string;
//   createdAt!: string;
//   status!: string;
//   isCash!: boolean;

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: Array<Order> = [];
  displayedColumns: string[] = ['totalPrice', 'createdAt', 'status', 'isCash'];

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res;
      }
    })
  }

  openOrder(order: Order) {
    this.router.navigateByUrl('/order/' + order.id);
  }
}
