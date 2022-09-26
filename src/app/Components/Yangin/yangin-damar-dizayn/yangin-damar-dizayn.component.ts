import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { YanginDamarDizaynKablo } from 'src/app/Models/yangin-damar-dizayn-kablo';
import { YanginDamarDizaynService } from 'src/app/Services/YanginKabloServices/yangin-damar-dizayn.service';
@Component({
  selector: 'app-yangin-damar-dizayn',
  templateUrl: './yangin-damar-dizayn.component.html',
  styleUrls: ['./yangin-damar-dizayn.component.css']
})
export class YanginDamarDizaynComponent implements OnInit {

  selectedKablo:YanginDamarDizaynKablo
  damarlar:YanginDamarDizaynKablo[]=[]
  constructor(
    private toastrService:ToastrService,
    private yanginDamarDizaynService:YanginDamarDizaynService,
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
    this.yanginDamarDizaynService.getKablolarByGenelDizaynId(genelDizaynId).subscribe(Response=>{
      this.damarlar=Response.data
      console.log(Response)
    })
  }
  deleteKablo(kablo:YanginDamarDizaynKablo){
    this.yanginDamarDizaynService.DeleteDamarDizayn(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload();
    })
  }


}
