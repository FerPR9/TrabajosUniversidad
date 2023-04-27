import { Component , Input} from '@angular/core';
import { Product } from '../products';
import { CartService } from "../cart.service";
import {DialogModule} from 'primeng/dialog';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent {
  display: boolean = false;

  constructor(private cartService: CartService, 
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
      }
  

  @Input() product!: Product;

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  showDialog() {
    this.display = true;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product );
    //window.alert("Your product has been added to the cart!");
    //this.messageService.add({
      //severity: "success",
      //detail: "Se agrega al carrito de compras",
      //});
      this.messageService.add({severity: "seccess",
    detail: "se agrego al carrito"});
  }

}
