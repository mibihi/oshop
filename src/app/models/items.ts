export class Items {
  price:number
  title:string
  quantity:number
totalprice:number
  city:string
  constructor(
  price:number,
  title:string,
  quantity:number,
totalprice:number,
  city:string) {
    this.price = price;
    this.title=title;
    this.quantity=quantity;
    this.totalprice=totalprice;
    this.city=city;


  }
}