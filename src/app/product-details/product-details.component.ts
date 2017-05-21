import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { ProductsService } from "app/products.service";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergemap';

@Component({
  selector: 'shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute
        .params
        .mergeMap(p => this.productsService.getAsync(Number.parseInt(p['id'])))
        .subscribe(p => this.product = p);
  }

  goBack() {
    this.router.navigate(['']);
  }

}
