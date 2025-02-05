import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DamarDizaynBase } from 'src/app/Models/damarDizaynBase';
import { paginationProps } from 'src/app/Models/paginationProps';
import { DamarDizaynService } from 'src/app/Services/damar-dizayn.service';
@Component({
  selector: 'app-yangin-damar-dizayn',
  templateUrl: './yangin-damar-dizayn.component.html',
  styleUrls: ['./yangin-damar-dizayn.component.css']
})
export class YanginDamarDizaynComponent implements OnInit {

  selectedKablo:DamarDizaynBase
  damarlar:DamarDizaynBase[]=[]
  paginationProp:paginationProps= new paginationProps(1,0,10)
  isDamarEkle:boolean=false
  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(
    private toastrService:ToastrService,
    private damarDizaynService:DamarDizaynService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["GenelDizaynId"]){
        this.getKablolarByGenelDizaynId(params["GenelDizaynId"])
      }
      else{
        console.log("tüm damarlar")
      }
    })
  }
  setSelectedKablo(kablo:DamarDizaynBase){
    this.selectedKablo=kablo
  }
  setRowColor(kablo:DamarDizaynBase){
    if (kablo===this.selectedKablo) {
      return "table-primary"
    }
    else{
      return ""
    }
  }

  getKablolarByGenelDizaynId(genelDizaynId:number){
    this.damarDizaynService.getAllByGenelDizaynId(genelDizaynId).subscribe(Response=>{
      this.damarlar=Response.data
      console.log(Response)
    })
  }
  deleteKablo(kablo:DamarDizaynBase){
    this.damarDizaynService.delete(kablo).subscribe(response=>{
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
