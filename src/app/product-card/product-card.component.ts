import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product;
  @Input('show-actions') showactions = true;
  @Input('shopping-cart') shoppingcart;
  
  constructor(private cartService:ShoppingCartService) { }

 addToCart(){
  this.cartService.addToCart(this.product);
 }
 removeFromCart(){
   this.cartService.removeFromCart(this.product);
 }
 getQuantity(){
   if(!this.shoppingcart) return 0;
   let item = this.shoppingcart.items[this.product.$key];
    return item ? item.quantity:0;
 }

}
