
import { Component } from "@angular/core";

@Component({
    selector: 'shop-header',  // <shop-header></shop-header>
    template: `
    <header>
        <h1>{{title}}</h1>
    </header>
    `,
    styles: [
        "header{ padding:12px; background:lightgrey; }"
    ]
})
export class ShopHeaderComponent {
  title = 'Gandalf\'s shop of wonderful and wondrous things';
}
