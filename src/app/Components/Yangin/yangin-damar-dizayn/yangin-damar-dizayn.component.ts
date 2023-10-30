import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { YanginDamarDizaynKablo } from 'src/app/Models/yangin-damar-dizayn-kablo';
import { DamarDizaynService } from 'src/app/Services/damar-dizayn.service';
@Component({
  selector: 'app-yangin-damar-dizayn',
  templateUrl: './yangin-damar-dizayn.component.html',
  styleUrls: ['./yangin-damar-dizayn.component.css']
})
export class YanginDamarDizaynComponent implements OnInit {

  selectedKablo:YanginDamarDizaynKablo
  damarlar:YanginDamarDizaynKablo[]=[]
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
      if(params["yanginGenelDizaynId"]){
        this.getKablolarByGenelDizaynId(params["yanginGenelDizaynId"])
      }
      else{
        console.log("tüm damarlar")
      }
    })
  }
  setSelectedKablo(kablo:YanginDamarDizaynKablo){
    this.selectedKablo=kablo
  }
  setRowColor(kablo:YanginDamarDizaynKablo){
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
  deleteKablo(kablo:YanginDamarDizaynKablo){
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
