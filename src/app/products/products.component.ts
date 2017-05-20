import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from "../products.service";

@Component({
  selector: 'shop-products',
  template: `
  <shop-product 
      [product]="product" 
      *ngFor="let product of products">
  </shop-product>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAll();
  }
}
