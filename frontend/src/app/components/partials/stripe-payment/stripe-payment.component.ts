import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent {
    @Input() order!:Order;
    paymentHandler:any = null;

    constructor(
      private orderService: OrderService,
      private cartService: CartService,
      private router: Router,
      private toastrService: ToastrService
      ) { }

    ngOnInit() {
      this.invokeStripe(this);
    }

    initializeCardPayment() {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51NNgqQChGc6HgZLxsnbVgCBUE7s3dkiHqa0kzeEaE1JHDiVH96P9wyUsd816JMEY9agMVmzyfKAbWfGGPnj5lIbJ00izbWDyDV',
        locale: 'ro',
        token: (stripeToken: any) => {
          this.processPayment(false, stripeToken.id);
          console.log({stripeToken})
          // alert('Stripe token generated!');
        }
      });

      paymentHandler.open({
        name: 'The Grill',
        description: 'Please enter your payment details',
        amount: this.order.totalPrice * 100
      });
    }

    invokeStripe(self: any) {
      if(!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51NNgqQChGc6HgZLxsnbVgCBUE7s3dkiHqa0kzeEaE1JHDiVH96P9wyUsd816JMEY9agMVmzyfKAbWfGGPnj5lIbJ00izbWDyDV',
            locale: 'ro',
            token: (stripeToken: any) => {
              console.log(stripeToken);
              // alert('Payment has been successfull!');
            }
          });
        }
        window.document.body.appendChild(script);
      }
    }

    processPayment(isCash:boolean, paymentId?: any) {
      console.log('intra');
      this.order.paymentId = paymentId;
      this.order.isCash = isCash;
      this.orderService.pay(this.order).subscribe(
        {
          next: (orderId: any) => {
            this.cartService.clearCart();
            this.router.navigateByUrl('/order/' + orderId);
            this.toastrService.success(
              'Plata inregistrata',
              'Succes'
            );
          },
          error: (error: any) => {
            this.toastrService.error('Payment Save Failed', 'Error');
          }
        }
      );
    }

    initializeCashPayment() {
      this.processPayment(true);
    }
}
