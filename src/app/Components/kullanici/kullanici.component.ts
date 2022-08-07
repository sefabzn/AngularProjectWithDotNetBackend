import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Kullanici } from 'src/app/Models/kullanici';
import { CartService } from 'src/app/Services/cart.service';
import { KullaniciService } from 'src/app/Services/kullanici.service';
@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css']
})
export class KullaniciComponent implements OnInit {


  filterText="";
  kullanicilar:Kullanici[]=[]
  constructor(private kullaniciService:KullaniciService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["makineId"]){
        this.getKullanicisByMakineId(params["makineId"])
      }
      else{
        this.getKullanicis();
      }
    })
  }
  getKullanicis(){

    this.kullaniciService.getKullanicis().subscribe((response)=>{
      this.kullanicilar=response.data
    })
  }
  getKullanicisByMakineId(makineId:number){

    this.kullaniciService.getKullanicisByMakineId(makineId).subscribe((response)=>{
      this.kullanicilar=response.data
    })
  }
 
  addToCart(kullanici:Kullanici){
    this.toastrService.success("Sepete Eklendi",kullanici.kullaniciAdi)
    this.cartService.addToCart(kullanici)
  }
      
    
      
  }
