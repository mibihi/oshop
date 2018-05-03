import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
items:ShoppingCartItem[]=[];
  get totalItemsCount(){
    let count = 0;
    for (let productId in  this.itemsMap) 
      count += this.itemsMap[productId].quantity;
      return count;
  }
  constructor(public itemsMap:{[productId:string]:ShoppingCartItem }){
    for(let productId in itemsMap){
      let item = itemsMap[productId];
      if(itemsMap[productId].quantity != 0)
      this.items.push(new ShoppingCartItem(item.product,item.quantity));
    }
  }
  get totalPrice(){
    let sum=0;
    for (let productId in this.items) 
    sum += this.items[productId].totalPrice;
    return sum;
      
    
  }
  
}