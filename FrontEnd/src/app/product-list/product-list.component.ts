import { Component } from '@angular/core';
import { Product } from '../products';
import { DatabaseService } from '../database.service';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product [] = [];

  constructor(private database:DatabaseService) {
    this.database.getItems().subscribe(res => {
      console.log(res);
      this.products = res;
    });

   }
  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}