import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { YanginGenelDizaynKablo } from 'src/app/Models/yangin-genel-dizayn-kablo';
import { YanginGenelDizaynService } from 'src/app/Services/YanginKabloServices/yangin-genel-dizayn.service';
@Component({
  selector: 'app-yangin-genel-dizayn',
  templateUrl: './yangin-genel-dizayn.component.html',
  styleUrls: ['./yangin-genel-dizayn.component.css']
})
export class YanginGenelDizaynComponent implements OnInit {

  selectedKablo:YanginGenelDizaynKablo
  kablolar:YanginGenelDizaynKablo[]=[]
  constructor(
    private toastrService:ToastrService,
    private yanginGenelDizaynService:YanginGenelDizaynService) { }

  ngOnInit(): void {
    this.getKablos()
  }

  setSelectedKablo(kablo:YanginGenelDizaynKablo){
    this.selectedKablo=kablo
  }
  setRowColor(kablo){
    if (kablo===this.selectedKablo) {
      return "table-primary"
    }
    else{
      return ""
    }
  }
  getKablos(){
    this.yanginGenelDizaynService.getKablolar().subscribe(response=>{
      this.kablolar=response.data
    })
  }
  deleteKablo(kablo:YanginGenelDizaynKablo){

    this.yanginGenelDizaynService.deleteGenelDizayn(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()

    })

  }

}
