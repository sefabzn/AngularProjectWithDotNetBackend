import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CctvGenelDizaynService } from 'src/app/Services/CctvKabloServices/cctv-genel-dizayn.service';
@Component({
  selector: 'app-cctv-genel-add',
  templateUrl: './cctv-genel-add.component.html',
  styleUrls: ['./cctv-genel-add.component.css']
})
export class CctvGenelAddComponent implements OnInit {

  userName=localStorage.getItem("user")
  CctvGenelAddForm:FormGroup
  date:string=new Date().toISOString().split('/').reverse().join('-')

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private cctvGenelDizaynService:CctvGenelDizaynService) { }

  ngOnInit(): void {
    this.createKabloUretimAddForm()
    console.log(this.date)

  }
  createKabloUretimAddForm(){
    this.CctvGenelAddForm=this.formBuilder.group({
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
    if(this.CctvGenelAddForm.valid){
      let makinaModel =Object.assign({},this.CctvGenelAddForm.value);
      makinaModel["tarih"]=this.date
      makinaModel["degistiren"]=this.userName
      
      this.cctvGenelDizaynService.addGenelDizayn(makinaModel).subscribe(data=>{
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
