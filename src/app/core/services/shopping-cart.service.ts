import { Injectable } from '@angular/core';
import { ShoppingCart } from '../../shared/models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {

  private items:Map<number,ShoppingCart> = new Map<number,ShoppingCart>();

  itemList:ShoppingCart [] = [];

  addItemCart(shoppingCart:ShoppingCart) {
    this.items.set(shoppingCart.productId,shoppingCart);
  }

  deleteItemCart(productId:number) {
    this.items.delete(productId);
  }

  totalCart() {
    let totalCart:number = 0;
    this.items.forEach(
      item=> {
        totalCart += item.getTotalPriceItem();
      }
    );
    return totalCart;
  }

  convertToListFromMap() {
    this.itemList.splice(0,this.itemList.length);
    this.items.forEach(
      item => {
        this.itemList.push(item);
      }
    );
    return this.itemList;
  }

  clearCart() {
    this.items.clear();
    this.itemList = [];
  }
}
