import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product={}
  categories$;
  id;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService:CategoriesService,
    private productService:ProductService) {
    this.categories$ = categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id)  this.productService.getProduct(this.id).take(1)
    .subscribe(p => this.product = p);
   }

   save(product){

     if(this.id) this.productService.updateProduct(this.id, product);
     else
    this.productService.create(product);
    this.router.navigate(['/adminproducts']);
   }
   delete(product){
     if (!confirm('Are you sure you want to delete this object?')) return;
     
     this.productService.delete(this.id);
     this.router.navigate(['/adminproducts']);
     
     
   }
  ngOnInit() {

  }
 
}
