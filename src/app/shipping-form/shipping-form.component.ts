import { ShoppingCart } from './../models/shopping-cart';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit ,OnDestroy{
  @Input('cart')  cart:ShoppingCart;
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  shipping= {};
  userSubscription:Subscription;
  userId:string;

  constructor(
    private router:Router,
    private  orderService : OrderService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe( user => this.userId = user.uid);
  }
  async placeOrder(){
    console.log("inside place order");
    let order=new Order(this.userId,this.shipping,this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['order-success'], result.key)
  }
  
}
