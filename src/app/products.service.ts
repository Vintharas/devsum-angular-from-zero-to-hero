import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Product } from './product';


const products: Product[] = [
    {name: 'Wand of Lightning', description: 'A powerful wand of ligthning.', price: 50, imageUrl: '/assets/images/wand.png'},
    {name: 'Staff of Fire', description: 'A powerful staff of fire.', price: 150, imageUrl: '/assets/images/staff-of-fire.png'},
    {name: 'Sword of Truth', description: 'A beautiful sword of tempered steel.', price: 200, imageUrl: 'assets/images/sword-of-truth.png'},
    {name: 'Necklace of Invisibility', description: 'A necklace for thieves, assassins or perverts.', price: 3000, imageUrl: 'assets/images/necklace-of-invisibility.png'},
    {name: 'Grand Potion of Healing', description: 'This potion will restore 1000 hp and cure all diseases and curses.', price: 300, imageUrl: 'assets/images/grand-potion-of-healing.png'},
    {name: 'Axe of Vindication', description: 'A sharp axe.', price: 200, imageUrl: 'assets/images/axe.png'},
  ];

@Injectable()
export class ProductsService {
  private productsUrl = "http://localhost:3000/products";

  constructor(private http: Http) { }

  getAll(): Product[] {
    return products;
  }

  getAllAsync(): Observable<Product[]> {
    return this.http
               .get(this.productsUrl)     // get(string): Response
               .map(r => r.json())        // Response => Product[]
               .delay(1000)              // delay 2 sec (to verify that we're using http)
               .catch(this.handleError);
  }

  getAsync(id: number): Observable<Product> {
    return this.http
               .get(`${this.productsUrl}/${id}`)
              .map(r => r.json())
              .catch(this.handleError);
  }

  handleError(r: Response) : Observable<string> {
    console.error(`Error: ${r.status} ${r.statusText} on ${r.url}`, r);
    // return application level error
    return Observable.throw('An error prevented us from retrieving the products');
  }
}
