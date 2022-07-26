import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/Models/cartItem';
import { CartItems } from 'src/app/Models/cartItems';
import { Kullanici } from 'src/app/Models/kullanici';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService:CartService,
    private toastrService:ToastrService) { }
  cartItems:CartItem[]=[];
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems=this.cartService.list()
  }
  removeFromCart(kullanici:Kullanici){
    this.cartService.removeFromCart(kullanici)
    this.toastrService.error("Sepetten Silindi",kullanici.kullanici_Adi + " Sepetten Silindi")
  }
}
