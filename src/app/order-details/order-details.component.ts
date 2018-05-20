import { Subscription } from 'rxjs/Subscription';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../order.service';
import { Order2 } from '../models/order2';
import { Items } from '../models/items';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit,OnDestroy {
  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }
id:string;
numOfItems:number=0;
or= new Order2();
orderTotalPrice:number=0;
datepl:string;
Data:Items[]=[];
orderSubscription:Subscription;

  constructor(private activatedRoute:ActivatedRoute,
              private orderService:OrderService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

   ngOnInit() {
 this.orderSubscription=this.orderService.getOrdersByKey(this.id).subscribe(
   o => {

    this.or.datePlaced= o.datePlaced;
    this.datepl=o.datePlaced;
  

    o.items.forEach(p => {
      
      let item = new Items(p.product.price,p.product.title,p.quantity,p.totalPrice,o.shipping.city);
    
     this.Data.push(item);
     this.numOfItems++;
     this.orderTotalPrice += p.totalPrice;
    });
    
    }
 );

return this.Data;

  }

}
