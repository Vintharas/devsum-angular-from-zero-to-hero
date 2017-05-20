import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { GoldCoinsPipe } from './gold-coins.pipe';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    FooterComponent,
    ProductsComponent,
    GoldCoinsPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
