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
import { paginationProps } from 'src/app/Models/paginationProps';
@Component({
  selector: 'app-makineler',
  templateUrl: './makineler.component.html',
  styleUrls: ['./makineler.component.css']
})
export class MakinelerComponent implements OnInit {

  makineList:Makine[]
  makineForm:FormGroup
  selectedMakine:Makine
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private formBuilder:FormBuilder,
    private makineService:MakineService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.CreateMakineAddForm()
    this.getMakineler()
  }

  update(makine:Makine){

    if(this.makineForm.valid){
      let makinaModel =Object.assign({},this.makineForm.value);
      makinaModel["Id"]=makine.id
      this.makineService.update(makinaModel).subscribe(data=>{
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
  setSelectedMakine(makine:Makine){
    this.selectedMakine=makine
    this.CreateMakineUpdateForm(makine)
  }
  setRowColor(makine:Makine){
    if (makine===this.selectedMakine) {
      return "table-primary"
    }
    return ""
  }
  CreateMakineUpdateForm(makine:Makine){
    this.makineForm=this.formBuilder.group({
      no:[makine.no,Validators.required],
      makineIsmi:[makine.makineIsmi,Validators.required],
      isinma:[makine.isinma,Validators.required],
      renkDegisimi:[makine.renkDegisimi,Validators.required],
      kopma:[makine.kopma,Validators.required],
      kesitDegisimi:[makine.kesitDegisimi,Validators.required],
    })

  }
  CreateMakineAddForm(){
    this.makineForm=this.formBuilder.group({
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
    if(this.makineForm.valid){
      let makinaModel =Object.assign({},this.makineForm.value);
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

    console.log(makine)
    this.makineService.delete(makine).subscribe(response=>{
      location.reload()
      this.toastrService.info(response.message,"İşlem Başarılı")

    })
  }

}
