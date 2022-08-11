import { Component, OnInit } from '@angular/core';
import { Makine } from 'src/app/Models/makine';
import { MakineService } from 'src/app/Services/makine.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-makineler',
  templateUrl: './makineler.component.html',
  styleUrls: ['./makineler.component.css']
})
export class MakinelerComponent implements OnInit {

  makineList:Makine[]
  makineAddForm:FormGroup
  selectedMakine:Makine
  constructor(private formBuilder:FormBuilder,
    private makineService:MakineService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.CreateMakineAddForm()
    this.getMakineler()
  }
  setSelectedMakine(makine:Makine){
    this.selectedMakine=makine
  }
  setRowColor(makine:Makine){
    if (makine===this.selectedMakine) {
      return "table-primary"
    }
    return ""
  }
  CreateMakineAddForm(){
    this.makineAddForm=this.formBuilder.group({
      no:["",Validators.required],
      makineIsmi:["",Validators.required],
      isinma:["",Validators.required],
      renkDegisimi:["",Validators.required],
      kopma:["",Validators.required],
      kesitDegisimi:["",Validators.required],
    })

  }
  getMakineler(){
    this.makineService.getMakinas().subscribe(Response=>{
      this.makineList=Response.data;
      console.log(this.makineList)
    })
  }
  write(){
    console.log("temp")
  }
  Add(){
    if(this.makineAddForm.valid){
      let makinaModel =Object.assign({},this.makineAddForm.value);
      this.makineService.add(makinaModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        this.getMakineler()
       
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
  deleteMakine(makine:Makine){

    this.makineService.delete(makine).subscribe(response=>{
      location.reload()
      this.toastrService.info(response.message,"İşlem Başarılı")

    })
  }

}
