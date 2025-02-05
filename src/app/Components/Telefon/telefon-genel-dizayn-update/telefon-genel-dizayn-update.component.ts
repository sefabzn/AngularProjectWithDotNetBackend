import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormBuilder,
  FormControl,
  Validators, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenelDizaynBase } from 'src/app/Models/genelDizaynBase';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';

@Component({
  selector: 'app-telefon-genel-dizayn-update',
  templateUrl: './telefon-genel-dizayn-update.component.html',
  styleUrls: ['./telefon-genel-dizayn-update.component.css']
})
export class TelefonGenelDizaynUpdateComponent implements OnInit {
  kabloId:number
  kablo:GenelDizaynBase
  userName=localStorage.getItem("user")
  TelefonGenelUpdateForm:FormGroup
  date:string=new Date().toISOString().split('/').reverse().join('-')

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private genelDizaynService:GenelDizaynService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params)=>{

      if (params["kabloId"]) {
        this.kabloId=params["kabloId"]
        this.getKablo()

      }
      else{
        this.toastrService.warning("Geçerli Kablo Yok")
      }

    })
    
  }
  getKablo(){
    this.genelDizaynService.getById(this.kabloId).subscribe ((response)=>{
      this.kablo=response.data
      this.createTelefonGenelUpdateForm()
    })
  }
  createTelefonGenelUpdateForm(){
    console.log(this.kablo)
    this.TelefonGenelUpdateForm=this.formBuilder.group({
      kablo:[this.kablo.kablo,Validators.required],
      kesit:[this.kablo.kesitCapi,Validators.required],
      orgu:[this.kablo.orgu,Validators.required],
      orguTelYapisi:[this.kablo.orguTelYapisi,Validators.required],
      polyesterOlcusu:[this.kablo.polyesterOlcusu,Validators.required],
      folyoTipi:[this.kablo.folyoTipi,Validators.required],
      folyoOlcusu:[this.kablo.folyoOlcusu,Validators.required],
      disKilif:[this.kablo.disKilif,Validators.required],
      disCap:[this.kablo.disCap,Validators.required],
      back:[this.kablo.back,Validators.required],
      ayna:[this.kablo.ayna,Validators.required],
      kalip:[this.kablo.kalip,Validators.required],
      damarSayisi:[this.kablo.damarSayisi,Validators.required],
  })
  }
  update(){
    if(this.TelefonGenelUpdateForm.valid){
      let model =Object.assign({},this.TelefonGenelUpdateForm.value);
      model["id"]=this.kabloId
      model["tarih"]=this.date
      model["degistiren"]=this.userName
      
      this.genelDizaynService.update(model).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },responseError=>{
        console.log(responseError.error.errors)
        
      })
    }
    else{
      this.toastrService.error("Form girişi hatalı","Dikkat")
    }
  } 
}
