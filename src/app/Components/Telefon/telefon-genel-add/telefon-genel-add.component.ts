import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TelefonGenelDizaynService } from 'src/app/Services/TelefonKabloService/telefon-genel-dizayn.service';

@Component({
  selector: 'app-telefon-genel-add',
  templateUrl: './telefon-genel-add.component.html',
  styleUrls: ['./telefon-genel-add.component.css']
})

export class TelefonGenelAddComponent implements OnInit {

  TelefonGenelAddForm:FormGroup
  userName=localStorage.getItem("user")
  date:string=new Date().toISOString().split('/').reverse().join('-')

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private telefonGenelDizaynService:TelefonGenelDizaynService) { }

  ngOnInit(): void {
    this.createKabloUretimAddForm()
    console.log(this.date)

  }
  createKabloUretimAddForm(){
    this.TelefonGenelAddForm=this.formBuilder.group({
      kablo:["",Validators.required],
      kesit:["",Validators.required],
      core:["",Validators.required],
      hatve:["",Validators.required],
      orgu:["",Validators.required],
      orguTelYapisi:["",Validators.required],
      polyesterOlcusu:["",Validators.required],
      folyoTipi:["",Validators.required],
      folyoOlcusu:["",Validators.required],
      disKilif:["",Validators.required],
      disCap:["",Validators.required],
      back:["",Validators.required],
      ayna:["",Validators.required],
      kalip:["",Validators.required],
      tarih:[this.date],
      damarSayisi:["",Validators.required],
      girilenDamarSayisi:["",Validators.required],
      zorlama:["",Validators.required],
      degistirilmeTarihi:[""],
      degistiren:[this.userName]

    })
  }
  add(){
    if(this.TelefonGenelAddForm.valid){
      let makinaModel =Object.assign({},this.TelefonGenelAddForm.value);
      makinaModel["tarih"]=this.date
      console.log(makinaModel)
      
      this.telefonGenelDizaynService.addGenelDizayn(makinaModel).subscribe(data=>{
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
