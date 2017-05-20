import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from "../products.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'shop-products',
  template: `
  <shop-product 
      [product]="product" 
      *ngFor="let product of products | async">
  </shop-product>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllAsync();
  }
}
