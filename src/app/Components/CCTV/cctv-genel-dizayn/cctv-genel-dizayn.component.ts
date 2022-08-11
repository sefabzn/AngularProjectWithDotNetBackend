import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cctvGenelDizaynKablo } from 'src/app/Models/cctvGenelDizaynKablo';
import { CctvKabloService } from 'src/app/Services/cctv-kablo.service';

@Component({
  selector: 'app-cctv-genel-dizayn',
  templateUrl: './cctv-genel-dizayn.component.html',
  styleUrls: ['./cctv-genel-dizayn.component.css']
})
export class CctvGenelDizaynComponent implements OnInit {


  selectedKablo:cctvGenelDizaynKablo
  kablolar:cctvGenelDizaynKablo[]=[]
  constructor(
    private toastrService:ToastrService,
    private cctvKabloService:CctvKabloService) { }

  ngOnInit(): void {
    this.getKablos()
  }

  setSelectedKablo(kablo:cctvGenelDizaynKablo){
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
    this.cctvKabloService.getKablolar().subscribe(response=>{
      this.kablolar=response.data
    })
  }
  deleteKablo(kablo:cctvGenelDizaynKablo){

    this.cctvKabloService.deleteCctvGenelDizayn(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()

    })

  }
}
