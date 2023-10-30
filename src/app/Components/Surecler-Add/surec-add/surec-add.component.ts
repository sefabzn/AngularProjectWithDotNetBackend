import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperatorIsEmri } from 'src/app/Models/operatorIsEmri';
import { Surec } from 'src/app/Models/process';
import { OperatorIsEmriService } from 'src/app/Services/operator-is-emri.service';
import { SurecService } from 'src/app/Services/surec.service';
import { SureclerComponent } from '../../surecler/surecler.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-surec-add',
  templateUrl: './surec-add.component.html',
  styleUrls: ['./surec-add.component.css']
})
export class SurecAddComponent implements OnInit {

  surecAddForm:FormGroup
  surecModel:Surec
  isEmriId:number
  isEmri:OperatorIsEmri
  constructor(private formBuilder:FormBuilder,
    private surecService:SurecService,
    private isEmriService:OperatorIsEmriService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe((params)=>{

      if (params["isEmriId"]) {
        this.isEmriId=params["isEmriId"]
        this.getIsEmri(this.isEmriId)

      }
      else{
        this.toastrService.warning("Geçerli Kablo Yok")
      }

    })
    this.createSurecAddForm()
  }
  createSurecAddForm(){
    this.surecAddForm=this.formBuilder.group({
      isim:["",Validators.required],
      aciklama:["",Validators.required],
      order:[0,Validators.required],
      tamamlanmaDurumu:[false],
   
      
  })
  }
  getIsEmri(isEmriId:number)
  {
    this.isEmriService.getById(isEmriId).subscribe(data=>{
      console.log(data)
      this.isEmri=data.data
    })
  }
  add(){
    if(this.surecAddForm.valid){
      this.surecModel=Object.assign({},this.surecAddForm.value)
      console.log(this.surecModel)

      this.surecModel["isEmriId"]=this.isEmriId
      this.surecModel["operatorIsEmri"]=this.isEmri
      this.surecModel["tamamlanmaDurumu"]=false

    
      this.surecService.Add(this.surecModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        console.log(this.surecModel)

      },responseError=>{
        if (responseError.error.ValidationErrors.length>0){
          for (let i = 0; i <responseError.error.ValidationErrors.length ; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası")
  
          }
        }
      })
    }
    else{
      this.toastrService.error("Form girişi hatalı","Dikkat")
    }
  }
}
