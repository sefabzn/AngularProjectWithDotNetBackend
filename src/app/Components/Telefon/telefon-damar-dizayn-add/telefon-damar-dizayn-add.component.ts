import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TelefonDamarDizaynService } from 'src/app/Services/TelefonKabloService/telefon-damar-dizayn.service';
@Component({
  selector: 'app-telefon-damar-dizayn-add',
  templateUrl: './telefon-damar-dizayn-add.component.html',
  styleUrls: ['./telefon-damar-dizayn-add.component.css']
})
export class TelefonDamarDizaynAddComponent implements OnInit {

 
  userName=localStorage.getItem("user")
  telefonDamarAddForm:FormGroup
  anaId:number
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private telefonDamarDizaynService:TelefonDamarDizaynService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createTelefonDamarDizaynAddForm()
    this.activatedRoute.params.subscribe((params)=>{
      if(params["telefonGenelDizaynId"]){
        this.anaId=params["telefonGenelDizaynId"];
      }
      else{
        console.log("tüm damarlar?")
      }
    })
  }
  createTelefonDamarDizaynAddForm(){
    this.telefonDamarAddForm=this.formBuilder.group({
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
    if(this.telefonDamarAddForm.valid){
      let formModel =Object.assign({},this.telefonDamarAddForm.value);
      formModel["anaId"]=this.anaId
      
      this.telefonDamarDizaynService.addDamarDizayn(formModel).subscribe(data=>{
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
