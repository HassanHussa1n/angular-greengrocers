import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    ItemsComponent,
    CartComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports: [ItemsComponent, CartComponent]
})
export class StoreModule { }
