import { Injectable } from '@angular/core';
import { CartItems } from '../Models/cartItems';
import { Kullanici } from '../Models/kullanici';
import {CartItem} from '../Models/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(kullanici:Kullanici){
    let item=CartItems.find(c=>c.kullanici.id===kullanici.id)
    if(item){
      item.quantity+=1;
    }
    else{
      let cartItem=new CartItem();
      cartItem.kullanici=kullanici;
      cartItem.quantity=1
      CartItems.push(cartItem)
    }
  }
  removeFromCart(kullanici:Kullanici){
    let item:CartItem=CartItems.find(c=>c.kullanici.id===kullanici.id)
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems
  }

}
