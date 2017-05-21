import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {
    path: 'products',
    children: [
        // products matches /products/
        {
            path: '',
            component: ProductsComponent
        },
        // product detail matches ex: /products/1
        {
            path: ':id',
            component: ProductDetailsComponent
        }
    ]
    },
    // default path
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
