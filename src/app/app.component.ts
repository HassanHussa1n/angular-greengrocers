import { Component } from '@angular/core';
import { CartService } from './store/cart.service';
import { Item } from './models/item';
import { CartItem } from './models/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalSum: number = 0

  constructor(private cartService: CartService) {}

  addToCart(item: Item) {
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1 // Initialize quantity to 1 when adding to cart
    };
    this.cartService.addToCart(cartItem);
    this.totalSum = this.cartService.sum
  }

  updateTotal(sum: number) {
    this.totalSum = sum
  }

  }



