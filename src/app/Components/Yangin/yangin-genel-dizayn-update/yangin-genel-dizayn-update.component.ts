import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormBuilder,
  FormControl,
  Validators, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { YanginGenelDizaynKablo } from 'src/app/Models/yangin-genel-dizayn-kablo';
import { YanginGenelDizaynService } from 'src/app/Services/YanginKabloServices/yangin-genel-dizayn.service';

@Component({
  selector: 'app-yangin-genel-dizayn-update',
  templateUrl: './yangin-genel-dizayn-update.component.html',
  styleUrls: ['./yangin-genel-dizayn-update.component.css']
})
export class YanginGenelDizaynUpdateComponent implements OnInit {
  kabloId:number
  kablo:YanginGenelDizaynKablo
  userName=localStorage.getItem("user")
  YanginGenelUpdateForm:FormGroup
  date:string=new Date().toISOString().split('/').reverse().join('-')

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private yanginGenelDizaynService:YanginGenelDizaynService,
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
    this.yanginGenelDizaynService.getById(this.kabloId).subscribe ((response)=>{
      this.kablo=response.data
      this.createTelefonGenelUpdateForm()
    })
  }
  createTelefonGenelUpdateForm(){
    console.log(this.kablo)
    this.YanginGenelUpdateForm=this.formBuilder.group({
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
    if(this.YanginGenelUpdateForm.valid){
      let model =Object.assign({},this.YanginGenelUpdateForm.value);
      model["id"]=this.kabloId
      model["tarih"]=this.date
      model["degistiren"]=this.userName
      
      this.yanginGenelDizaynService.update(model).subscribe(data=>{
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
