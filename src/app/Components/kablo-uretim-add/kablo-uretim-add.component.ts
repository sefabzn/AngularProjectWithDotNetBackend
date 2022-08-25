import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { Sarfiyat } from 'src/app/Models/sarfiyat';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
import { SarfiyatService } from 'src/app/Services/sarfiyat.service';
@Component({
  selector: 'app-kablo-uretim-add',
  templateUrl: './kablo-uretim-add.component.html',
  styleUrls: ['./kablo-uretim-add.component.css']
})
export class KabloUretimAddComponent implements OnInit {

  kabloUretimAddForm:FormGroup
  tarih:string=(new Date().toISOString())
  makineModel:KabloUretim
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private kabloUretimService:KabloUretimService,
    private sarfiyatService:SarfiyatService) { }

  ngOnInit(): void {
    this.createKabloUretimAddForm()

  }
  createKabloUretimAddForm(){
    this.kabloUretimAddForm=this.formBuilder.group({
      kabloIsmi:["",Validators.required],
      makineId:["",Validators.required],
      kesitAlani:["",Validators.required],
      metraj:["",Validators.required],
      kopma:["",Validators.required],
      renkDegisimi:["",Validators.required],
      genelAriza:["",Validators.required],
      hurdaPvc:["",Validators.required],
      hurdaCu:["",Validators.required],
      calismaSuresi:["",Validators.required],
      
  })
  } 
  add(){
    if(this.kabloUretimAddForm.valid){
      this.makineModel=Object.assign({},this.kabloUretimAddForm.value);
      this.makineModel["tarih"]=this.tarih
      this.makineModel["degistiren"]=localStorage.getItem("user")
      this.kabloUretimService.add(this.makineModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        console.log(this.makineModel)

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
  addSarfiyat(){
  
    console.log(this.kabloUretimAddForm["makineId"])
    // this.sarfiyatService.add(sarfiyat).subscribe(Response=>{
    //   this.toastrService.info(Response.message,"İşlem Başarılı")
    // })
  }
}
