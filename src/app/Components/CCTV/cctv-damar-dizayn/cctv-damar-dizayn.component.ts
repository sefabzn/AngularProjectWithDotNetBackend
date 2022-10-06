import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CctvDamarDizaynKablo } from 'src/app/Models/cctvDamarDizaynKablo';
import { paginationProps } from 'src/app/Models/paginationProps';
import { CctvDamarDizaynService } from 'src/app/Services/CctvKabloServices/cctv-damar-dizayn.service';

@Component({
  selector: 'app-cctv-damar-dizayn',
  templateUrl: './cctv-damar-dizayn.component.html',
  styleUrls: ['./cctv-damar-dizayn.component.css']
})
export class CctvDamarDizaynComponent implements OnInit {
  selectedKablo:CctvDamarDizaynKablo
  damarlar:CctvDamarDizaynKablo[]=[]
  isDamarEkle:boolean=false
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(
    private toastrService:ToastrService,
    private cctvDamarDizaynService:CctvDamarDizaynService,
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
    this.cctvDamarDizaynService.getKablolarByGenelDizaynId(genelDizaynId).subscribe(Response=>{
      this.damarlar=Response.data
      console.log(Response)
    })
  }
  deleteKablo(kablo:CctvDamarDizaynKablo){
    this.cctvDamarDizaynService.deleteDamarDizayn(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload();
    })
  }
  setIsDamarEkle(){
    if(this.isDamarEkle){
      this.isDamarEkle=false
    }
    else{
      this.isDamarEkle=true
    }
  }
}
