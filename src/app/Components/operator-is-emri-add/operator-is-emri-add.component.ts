import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Kullanici } from 'src/app/Models/kullanici';
import { Makine } from 'src/app/Models/makine';
import { OperatorIsEmri } from 'src/app/Models/operatorIsEmri';

import { KullaniciService } from 'src/app/Services/kullanici.service';
import { MakineService } from 'src/app/Services/makine.service';
import { OperatorIsEmriService } from 'src/app/Services/operator-is-emri.service';
@Component({
  selector: 'app-operator-is-emri-add',
  templateUrl: './operator-is-emri-add.component.html',
  styleUrls: ['./operator-is-emri-add.component.css']
})
export class OperatorIsEmriAddComponent implements OnInit {
  operatorIsEmriForm:FormGroup;
  isEmriModel:OperatorIsEmri
  selectedMakine:Makine
  makineler:Makine[]
  kullanicilar:Kullanici[]
  tarih:string=(new Date().toISOString())

  constructor(private formBuilder:FormBuilder,
    private makineService:MakineService,
    private kullaniciService:KullaniciService,
    private operatorIsEmriService:OperatorIsEmriService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getMakineler()
    this.getKullanicilar()
  }
  getMakineler(){
    this.makineService.getMakinas().subscribe(response=>{
      this.makineler=response.data
    })
  }
  getKullanicilar(){
    this.kullaniciService.getKullanicis().subscribe(response=>{
      this.kullanicilar=response.data
    })
  }
  createKabloUretimAddForm(){
    this.operatorIsEmriForm=this.formBuilder.group({
      operator:["",Validators.required],
      makine:["",Validators.required],
      urunIsmi:["",Validators.required],
      dizaynTuru:["",Validators.required],
      kesitCapi:[""],
      metraj:[""],
      disCap:[""],
      back:[""],
      ayna:[""],
      kalip:[""],
    })
  }
  add(){
    if(this.operatorIsEmriForm.valid){
      this.isEmriModel=Object.assign({},this.operatorIsEmriForm.value);
      this.isEmriModel["tarih"]=this.tarih
      this.operatorIsEmriService.add(this.isEmriModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        console.log(this.isEmriModel)

      },responseError=>{
        if (responseError.error.ValidationErrors.length>0){
          for (let i = 0; i <responseError.error.ValidationErrors.length ; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası")
  
          }
        }
      })
  }
}
}