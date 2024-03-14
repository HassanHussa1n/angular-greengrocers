import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [
    //{id: '1', name: 'dummy', price: 10, quantity: 1}
  ];
  sum: number = 0


  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    
    }
    this.calculateTotal()
  }

  removeFromCart(item: CartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
      }
    }
    this.calculateTotal()
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  calculateTotal() {
    this.sum = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
}
