import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/store.service';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  filteredItems: Item[] = []; 

  @Output() addToCartEvent = new EventEmitter<Item>();

  constructor(private readonly storeService: StoreService) {}

  async ngOnInit() {
    await this.loadItems();
  }

  async loadItems() {
    try {
      this.items = await this.storeService.items; 
      this.filteredItems = [...this.items]
    } catch (error) {
      console.error('error loading items:', error);
    }
  }
  addToCart(item: Item) {
    this.addToCartEvent.emit(item);
    console.log("item added", item)
  }

  filterByType(type: string) {
    if (type === 'all') {
      this.filteredItems = [...this.items]
    }
    else {
      this.filteredItems = this.items.filter(item => item.type === type)
    }
  }

  sortByPrice() {
    this.filteredItems.sort((a, b) => a.price - b.price)
  }

  sortByName() {
    this.filteredItems.sort((a, b) => a.name.localeCompare(b.name))
  }

}
