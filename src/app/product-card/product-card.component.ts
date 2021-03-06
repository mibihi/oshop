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
  @Input('shopping-cart') shoppingCart;
  
  constructor(private cartService:ShoppingCartService) { }

 addToCart(){
  this.cartService.addToCart(this.product);
 }
 

}
