import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from "../products.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'shop-products',
  template: `
  <shop-product 
      [product]="product" 
      *ngFor="let product of products">
  </shop-product>
  <p *ngIf="errorMessage" class="error">{{errorMessage}}</p>
  <p *ngIf="isLoading && !errorMessage" >loading...</p>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  errorMessage = '';
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getAllAsync()
      .subscribe(
        /* success */ p => this.products = p,
        /* error */   e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false
      );
  }
}
