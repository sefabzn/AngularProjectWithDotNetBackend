import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CctvDamarDizaynService } from 'src/app/Services/CctvKabloServices/cctv-damar-dizayn.service';
@Component({
  selector: 'app-cctv-damar-dizayn-add',
  templateUrl: './cctv-damar-dizayn-add.component.html',
  styleUrls: ['./cctv-damar-dizayn-add.component.css']
})
export class CctvDamarDizaynAddComponent implements OnInit {

  userName=localStorage.getItem("user")
  CctvDamarAddForm:FormGroup
  anaId:number
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private cctvDamarDizaynService:CctvDamarDizaynService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createCctvDamarDizaynAddForm()
    this.activatedRoute.params.subscribe((params)=>{
      if(params["cctvGenelDizaynId"]){
        this.anaId=params["cctvGenelDizaynId"];
      }
      else{
        console.log("tüm damarlar?")
      }
    })
  }
  createCctvDamarDizaynAddForm(){
    this.CctvDamarAddForm=this.formBuilder.group({
      anaId:[""],
      damarNo:[0],
      renk:[""],
      imalat:[""],
      kesitCapi:[0],
      etk:[0],
      cap:[0],
      back:[0],
      ayna:[0],
      kalip:[""],
      hatve:[0],

    })
  }
  add(){
    if(this.CctvDamarAddForm.valid){
      let formModel =Object.assign({},this.CctvDamarAddForm.value);
      formModel["anaId"]=this.anaId
      
      this.cctvDamarDizaynService.addDamarDizayn(formModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        location.reload();
      },responseError=>{
        console.log(responseError.error.errors)
      })
    }
    else{
      this.toastrService.error("Form girişi hatalı","Dikkat")
    }
  }
  
}
