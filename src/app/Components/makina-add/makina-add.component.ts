import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MakinaService } from 'src/app/Services/makina.service';
@Component({
  selector: 'app-makina-add',
  templateUrl: './makina-add.component.html',
  styleUrls: ['./makina-add.component.css'],
})
export class MakinaAddComponent implements OnInit {
  
  makinaAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private makinaService:MakinaService,
    private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.createMakinaAddForm()
  }

  createMakinaAddForm(){
    this.makinaAddForm=this.formBuilder.group({
      no:["",Validators.required],
      makina_Ismi:["",Validators.required]
    })
  }
add(){
  if(this.makinaAddForm.valid){
    let makinaModel =Object.assign({},this.makinaAddForm.value);
    this.makinaService.add(makinaModel).subscribe(data=>{
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
