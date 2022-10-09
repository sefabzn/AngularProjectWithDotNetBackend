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
import { paginationProps } from 'src/app/Models/paginationProps';
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
  paginationProp:paginationProps= new paginationProps(1,0,15)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private toastrService:ToastrService,
    private makineService:MakineService,
    private kesitYapisiService:KesitYapisiService,
    private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.CreateKesitYapisiForm()
    this.getKesitYapisiList()
  }

  CreateKesitYapisiUpdateForm(kesitYapisi:KesitYapisi){
    this.kesiYapisiForm=this.formbuilder.group({
      kesitCapi:[kesitYapisi.kesitCapi,Validators.required],
      back:[kesitYapisi.back,Validators.required],
      kilcalDamarSayisi:[kesitYapisi.kilcalDamarSayisi,Validators.required],
      kilcalDamarCapi:[kesitYapisi.kilcalDamarCapi,Validators.required],
      hatve:[kesitYapisi.hatve,Validators.required],
      disCap:[kesitYapisi.disCap,Validators.required],
      ayna:[kesitYapisi.ayna,Validators.required],
    })
  }
  CreateKesitYapisiForm(){
    this.kesiYapisiForm=this.formbuilder.group({
      kesitCapi:["",Validators.required],
      back:["",Validators.required],
      kilcalDamarSayisi:["",Validators.required],
      kilcalDamarCapi:["",Validators.required],
      hatve:["",Validators.required],
      disCap:["",Validators.required],
      ayna:["",Validators.required],
     
    })
  }
  setSelectedKesit(kesit:KesitYapisi){
    this.selectedKesit=kesit
    this.CreateKesitYapisiUpdateForm(kesit)
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
  update(kesitYapisi:KesitYapisi){
    if(this.kesiYapisiForm.valid){
      let kesitModel =Object.assign({},this.kesiYapisiForm.value);
      kesitModel["Id"]=kesitYapisi.id;
      this.kesitYapisiService.update(kesitModel).subscribe(data=>{
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
