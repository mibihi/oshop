import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
id:string;
order;
  constructor(private activatedRoute:ActivatedRoute,
              private orderService:OrderService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

   ngOnInit() {
 this.order =this.orderService.getOrdersByKey(this.id)
    .subscribe(ord => 
      {
        this.order=ord,
        console.log(this.order);}
      );
 

  }

}
