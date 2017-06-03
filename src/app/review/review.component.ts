import { Component, OnInit, Input } from '@angular/core';
import { Review } from "../product";

@Component({
  selector: 'shop-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;

  constructor() { }
  ngOnInit() { }

}
