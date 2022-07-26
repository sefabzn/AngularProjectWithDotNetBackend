import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
@Component({
  selector: 'app-kablo-uretim-add',
  templateUrl: './kablo-uretim-add.component.html',
  styleUrls: ['./kablo-uretim-add.component.css']
})
export class KabloUretimAddComponent implements OnInit {

  kabloUretimAddForm:FormGroup
  date:string=(new Date().toLocaleDateString().split('.').reverse().join('-'))
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private kabloUretimService:KabloUretimService) { }

  ngOnInit(): void {
    this.createKabloUretimAddForm()
    console.log(this.date)

  }
  createKabloUretimAddForm(){
    this.kabloUretimAddForm=this.formBuilder.group({
      kabloIsmi:["",Validators.required],
      makineId:["",Validators.required],
      metraj:["",Validators.required],
    })
  }
  add(){
    if(this.kabloUretimAddForm.valid){
      let makinaModel =Object.assign({},this.kabloUretimAddForm.value);
      makinaModel["tarih"]=this.date
      
      this.kabloUretimService.add(makinaModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
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
