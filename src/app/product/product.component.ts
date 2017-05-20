import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../product";

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }
  ngOnInit() { }

  buy(product: Product) {
    alert(`You bought ${product.name}!!! Congrats!`);
  }

}
