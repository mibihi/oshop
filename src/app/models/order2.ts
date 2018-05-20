import { Shipping } from "./shipping";

export class Order2 {
  datePlaced?:string;
  items?:string[]; 
  shipping:Shipping;
  constructor(){
   this.datePlaced =this.datePlaced;
   this.items=this.items;
   this.shipping=this.shipping;
  }
  }