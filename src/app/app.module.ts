import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { GoldCoinsPipe } from './gold-coins.pipe';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    FooterComponent,
    ProductsComponent,
    GoldCoinsPipe,
    ProductComponent,
    ProductDetailsComponent,
    AddReviewFormComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
