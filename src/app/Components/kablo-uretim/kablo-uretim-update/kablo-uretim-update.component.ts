import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
import { SarfiyatService } from 'src/app/Services/sarfiyat.service';
@Component({
  selector: 'app-kablo-uretim-update',
  templateUrl: './kablo-uretim-update.component.html',
  styleUrls: ['./kablo-uretim-update.component.css']
})
export class KabloUretimUpdateComponent implements OnInit {

  kabloId:number
  kablo:KabloUretim
  kabloUretimUpdateForm:FormGroup
  tarih:string=(new Date().toISOString())
  kabloModel:KabloUretim
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private kabloUretimService:KabloUretimService,
    private sarfiyatService:SarfiyatService,
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
    this.kabloUretimService.getById(this.kabloId).subscribe ((response)=>{
      this.kablo=response.data
      this.createKabloUretimUpdateForm()

    })
  }
  createKabloUretimUpdateForm(){
    console.log(this.kablo)
    this.kabloUretimUpdateForm=this.formBuilder.group({
      kabloIsmi:[this.kablo.kabloIsmi,Validators.required],
      makineId:[this.kablo.makineId,Validators.required],
      kesitCapi:[this.kablo.kesitCapi,Validators.required],
      metraj:[this.kablo.metraj,Validators.required],
      kopma:[this.kablo.kopma,Validators.required],
      renkDegisimi:[this.kablo.renkDegisimi,Validators.required],
      genelAriza:[this.kablo.genelAriza,Validators.required],
      hurdaPvc:[this.kablo.hurdaPvc,Validators.required],
      hurdaCu:[this.kablo.hurdaCu,Validators.required],
      calismaSuresi:[this.kablo.calismaSuresi,Validators.required],
      
  })
  } 
  update(){
    if(this.kabloUretimUpdateForm.valid){
      this.kabloModel=Object.assign({},this.kabloUretimUpdateForm.value);
      this.kabloModel["id"]=this.kabloId
      this.kabloModel["tarih"]=this.tarih
      this.kabloModel["degistiren"]=localStorage.getItem("user")
      this.kabloUretimService.update(this.kabloModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        console.log(this.kabloModel)

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
