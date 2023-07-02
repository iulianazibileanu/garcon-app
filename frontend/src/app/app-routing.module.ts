import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { MyOrdersComponent } from './components/pages/my-orders/my-orders.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'search/:searchTerm', component: HomeComponent},
  {path: 'category/:category', component: HomeComponent},
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentPageComponent, canActivate: [AuthGuard]},
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path: 'order/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
