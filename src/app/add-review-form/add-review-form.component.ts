import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from "../review";

@Component({
  selector: 'shop-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})
export class AddReviewFormComponent implements OnInit {
  newReview: Review;
  @Output() onNewReview: EventEmitter<Review> = new EventEmitter<Review>();

  constructor() { }

  ngOnInit() {
    // logged in as user Jaime
    this.refreshReview();
  }

  addNewReview() {
    //alert(`Add new review ${this.newReview.title}`);
    this.onNewReview.emit(this.newReview);
    this.refreshReview();
  }

  refreshReview() {
    this.newReview = new Review('Jaime, the Conquistador');
  }

}
