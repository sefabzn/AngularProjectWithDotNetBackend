import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KesitYapisi } from 'src/app/Models/kesitYapisi';
import { Makine } from 'src/app/Models/makine';
import { KesitYapisiService } from 'src/app/Services/kesit-yapisi.service';
import { MakineService } from 'src/app/Services/makine.service';
@Component({
  selector: 'app-kesit-yapisi',
  templateUrl: './kesit-yapisi.component.html',
  styleUrls: ['./kesit-yapisi.component.css']
})
export class KesitYapisiComponent implements OnInit {

  selectedKesit:KesitYapisi
  makineler:Makine[]
  kesiYapisiForm:FormGroup
  kesitYapisiList:KesitYapisi[]
  constructor(private toastrService:ToastrService,
    private makineService:MakineService,
    private kesitYapisiService:KesitYapisiService,
    private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.CreateKesitYapisiForm()
    this.getKesitYapisiList()
  }
  CreateKesitYapisiForm(){
    this.kesiYapisiForm=this.formbuilder.group({
      kesit:["",Validators.required],
      back:["",Validators.required],
      kilcalDamarSayisi:["",Validators.required],
      kilcalDamarCapi:["",Validators.required],
      hatve:["",Validators.required],
      disCap:["",Validators.required],
      ayna:["",Validators.required],
      makineIsmi:[""],
      hiz:[0]
    })
  }
  setSelectedKesit(kesit:KesitYapisi){
    this.selectedKesit=kesit
  }
  setRowColor(kesit:KesitYapisi){
    if (kesit===this.selectedKesit) {
      return "table-primary"
    }
    return ""
  }
  GetMakineler(){
    this.makineService.getMakinas().subscribe(respond=>{
      this.makineler=respond.data
      console.log(this.makineler)
    })
  }
  Add(){
    if(this.kesiYapisiForm.valid){
      let kesitModel =Object.assign({},this.kesiYapisiForm.value);
      this.kesitYapisiService.add(kesitModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        this.getKesitYapisiList()
       
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
  getKesitYapisiList(){
      this.kesitYapisiService.getKesitYapisiList().subscribe(Response=>{
        this.kesitYapisiList=Response.data
        console.log(this.kesitYapisiList)
      })
  }
  deleteKesit(kesit:KesitYapisi){
    this.kesitYapisiService.delete(kesit).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()
    })
  }
}
