import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem as CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  

  constructor(private cartService: CartService) {}

  cartItems = this.cartService.cartItems
  totalSum: number = 0

  @Output() totalSumChanged = new EventEmitter<number>()

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalSum = this.cartService.sum
    this.totalSumChanged.emit(this.totalSum)
    console.log("Here's the data", this.cartItems)
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
    this.totalSum = this.cartService.sum
    this.totalSumChanged.emit(this.totalSum)
  }

  addToCart(item: CartItem) {
    this.cartService.addToCart(item);
    this.cartItems = this.cartService.getCartItems();
    this.totalSum = this.cartService.sum
    this.totalSumChanged.emit(this.totalSum)
  }


}
