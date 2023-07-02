import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css']
})
export class OrderTrackPageComponent implements OnInit {

  order!:Order;
  reviewedId: string = '';
  constructor(activatedRoute: ActivatedRoute,
              orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     if(!params.orderId) return;

     orderService.trackOrderById(params.orderId).subscribe(order => {
       this.order = order;
       for(let product of order.items) {
        product.food.canReview = this.reviewedId !== product.food.id;
       }
     })

    activatedRoute.queryParams.subscribe(params => {
      if(params['reviewed']) {
        this.reviewedId = params['reviewed'];
      }
    });

  }

  ngOnInit(): void {
  }

}
