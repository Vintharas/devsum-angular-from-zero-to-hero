import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { Review } from "../review";
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
  addingAReview = false;

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
    //history.back();
  }

  addReview() {
    this.addingAReview = true;
  }

  addReviewToProduct(review: Review) {
    this.product.reviews.unshift(review);
    // save it in the db via service
    console.log(`yippi! new review added ${JSON.stringify(review)}`);
    this.addingAReview = false;
  }

}
