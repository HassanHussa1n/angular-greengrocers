import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/item';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private itemId = 1;
  private itemList: Item[] = [];
   
  http = inject(HttpClient)

  
  //Value goes here:
  // TODO replace with a get request
  get items(): Promise<Item[]> {
    
    const result = firstValueFrom(this.http.get(`${environment.apiUrl}groceries`))
    console.log(result)
    // @ts-ignore
    return result
    
  }



}
