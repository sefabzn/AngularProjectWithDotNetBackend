import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CctvDamarDizaynKablo } from 'src/app/Models/cctvDamarDizaynKablo';
import { CctvKabloService } from 'src/app/Services/cctv-kablo.service';

@Component({
  selector: 'app-cctv-damar-dizayn',
  templateUrl: './cctv-damar-dizayn.component.html',
  styleUrls: ['./cctv-damar-dizayn.component.css']
})
export class CctvDamarDizaynComponent implements OnInit {

  selectedKablo:CctvDamarDizaynKablo
  damarlar:CctvDamarDizaynKablo[]=[]
  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private cctvKabloService:CctvKabloService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["cctvGenelDizaynId"]){
        this.getKablolarByGenelDizaynId(params["cctvGenelDizaynId"])
      }
      else{
        console.log("tüm damarlar")
      }
    })
  }
  setSelectedKablo(kablo:CctvDamarDizaynKablo){
    this.selectedKablo=kablo
  }
  setRowColor(kablo:CctvDamarDizaynKablo){
    if (kablo===this.selectedKablo) {
      return "table-primary"
    }
    else{
      return ""
    }
  }

  getKablolarByGenelDizaynId(genelDizaynId:number){
    this.cctvKabloService.getKablolarByGenelDizaynId(genelDizaynId).subscribe(Response=>{
      this.damarlar=Response.data
      console.log(Response)
    })
  }
  deleteKablo(kablo:CctvDamarDizaynKablo){
    this.cctvKabloService.deleteCctvDamarDizayn(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload();
    })
  }
}
