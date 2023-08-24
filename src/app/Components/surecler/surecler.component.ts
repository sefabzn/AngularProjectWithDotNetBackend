import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Surec } from 'src/app/Models/surec';
import { SurecService } from 'src/app/Services/surec.service';

@Component({
  selector: 'app-surecler',
  templateUrl: './surecler.component.html',
  styleUrls: ['./surecler.component.css']
})
export class SureclerComponent implements OnInit {

  constructor(private surecService:SurecService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }


  isEmriId:number
  surecList:Surec[]
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{

      if (params["isEmriId"]) {
        this.isEmriId=params["isEmriId"]
        this.GetAllById(this.isEmriId)
        

      }
      else{
        this.toastrService.warning("Geçerli Kablo Yok")
      }

    })
  }

  GetAllById(isEmriId:number){

     this.surecService.getAllById(isEmriId).subscribe((response)=>{
      this.surecList=response.data
      console.log(this.surecList)
     })
  }

}
