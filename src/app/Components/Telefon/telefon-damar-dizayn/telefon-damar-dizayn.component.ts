import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { TelefonDamarDizaynKablo } from 'src/app/Models/telefon-damar-dizayn-kablo';
import { TelefonDamarDizaynService } from 'src/app/Services/TelefonKabloService/telefon-damar-dizayn.service';
@Component({
  selector: 'app-telefon-damar-dizayn',
  templateUrl: './telefon-damar-dizayn.component.html',
  styleUrls: ['./telefon-damar-dizayn.component.css']
})
export class TelefonDamarDizaynComponent implements OnInit {

  isDamarEkle:boolean=false
  selectedKablo:TelefonDamarDizaynKablo
  damarlar:TelefonDamarDizaynKablo[]=[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(
    private toastrService:ToastrService,
    private telefonDamarDizaynService:TelefonDamarDizaynService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["telefonGenelDizaynId"]){
        this.getKablolarByGenelDizaynId(params["telefonGenelDizaynId"])
      }
      else{
        console.log("tüm damarlar")
      }
    })
  }
  setSelectedKablo(kablo:TelefonDamarDizaynKablo){
    this.selectedKablo=kablo
  }
  setRowColor(kablo:TelefonDamarDizaynKablo){
    if (kablo===this.selectedKablo) {
      return "table-primary"
    }
    else{
      return ""
    }
  }

  getKablolarByGenelDizaynId(genelDizaynId:number){
    this.telefonDamarDizaynService.getKablolarByGenelDizaynId(genelDizaynId).subscribe(Response=>{
      this.damarlar=Response.data
      console.log(Response)
    })
  }
  deleteKablo(kablo:TelefonDamarDizaynKablo){
    this.telefonDamarDizaynService.DeleteDamarDizayn(kablo).subscribe(response=>{
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
