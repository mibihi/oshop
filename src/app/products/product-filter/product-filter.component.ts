import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category;
  categories$;
  constructor(
    categoryService:CategoriesService
  ) { this.categories$ = categoryService.getAll(); }

  ngOnInit() {
    
  }

}
