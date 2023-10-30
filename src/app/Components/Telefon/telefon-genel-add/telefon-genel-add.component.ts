import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';

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
     private genelDizaynService:GenelDizaynService) { }

  ngOnInit(): void {
    this.createKabloUretimAddForm()
    console.log(this.date)

  }
  createKabloUretimAddForm(){
    this.TelefonGenelAddForm=this.formBuilder.group({
      kablo:[""],
      kesit:[0],
      core:[0],
      hatve:[0],
      orgu:[0],
      orguTelYapisi:[""],
      polyesterOlcusu:[0],
      folyoTipi:[""],
      folyoOlcusu:[0],
      disKilif:[0],
      disCap:[0],
      back:[0],
      ayna:[0],
      kalip:[""],
      tarih:[this.date],
      damarSayisi:[0],
      girilenDamarSayisi:[0],
      zorlama:[""],
      degistiren:[this.userName]

    })
  }
  add(){
    if(this.TelefonGenelAddForm.valid){
      let makinaModel =Object.assign({},this.TelefonGenelAddForm.value);
      makinaModel["tarih"]=this.date
      console.log(makinaModel)
      
      this.genelDizaynService.add(makinaModel).subscribe(data=>{
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
