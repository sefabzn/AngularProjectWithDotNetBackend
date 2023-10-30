import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DamarDizaynService } from 'src/app/Services/damar-dizayn.service';
@Component({
  selector: 'app-yangin-damar-dizayn-add',
  templateUrl: './yangin-damar-dizayn-add.component.html',
  styleUrls: ['./yangin-damar-dizayn-add.component.css']
})
export class YanginDamarDizaynAddComponent implements OnInit {

  
  userName=localStorage.getItem("user")
  yanginDamarAddForm:FormGroup
  anaId:number
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
     private damarDizaynService:DamarDizaynService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createYanginDamarDizaynAddForm()
    this.activatedRoute.params.subscribe((params)=>{
      if(params["genelDizaynId"]){
        this.anaId=params["genelDizaynId"];
      }
      else{
        console.log("tüm damarlar?")
      }
    })
  }
  createYanginDamarDizaynAddForm(){
    this.yanginDamarAddForm=this.formBuilder.group({
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
    if(this.yanginDamarAddForm.valid){
      let formModel =Object.assign({},this.yanginDamarAddForm.value);
      formModel["anaId"]=this.anaId
      
      this.damarDizaynService.add(formModel).subscribe(data=>{
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
