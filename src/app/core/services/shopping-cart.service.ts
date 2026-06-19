import { Injectable } from '@angular/core';
import { ShoppingCart } from '../../shared/models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {

  private items:Map<number,ShoppingCart> = new Map<number,ShoppingCart>();

  itemList:ShoppingCart [] = [];

  constructor() {}

  addItemCart(shoppingCart:ShoppingCart) {
    this.items.set(shoppingCart.productId,shoppingCart);
  }

  deleteItemCart(productId:number) {
    this.items.delete(productId);
    this.items.forEach(
      (valor,clave)=> {
        console.log("Esta es la clave y su valor: " + clave,valor);
      }
    );
  }

  totalCart() {
    let totalCart:number = 0;
    this.items.forEach(
      (item,clave)=> {
        totalCart += item.getTotalPriceItem();
      }
    );
    return totalCart;
  }

  convertToListFromMap() {
    this.itemList.splice(0,this.itemList.length);
    this.items.forEach(
      (item,clave) => {
        this.itemList.push(item);
      }
    );
    return this.itemList;
  }
}
