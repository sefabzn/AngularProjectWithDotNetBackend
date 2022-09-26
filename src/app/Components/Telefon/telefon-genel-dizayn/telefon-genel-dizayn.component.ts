import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TelefonGenelDizaynKablo } from 'src/app/Models/telefon-genel-dizayn-kablo';
import { TelefonGenelDizaynService } from 'src/app/Services/TelefonKabloService/telefon-genel-dizayn.service';
@Component({
  selector: 'app-telefon-genel-dizayn',
  templateUrl: './telefon-genel-dizayn.component.html',
  styleUrls: ['./telefon-genel-dizayn.component.css']
})
export class TelefonGenelDizaynComponent implements OnInit {

  selectedKablo:TelefonGenelDizaynKablo
  kablolar:TelefonGenelDizaynKablo[]=[]
  constructor(
    private toastrService:ToastrService,
    private telefonGenelDizaynService:TelefonGenelDizaynService) { }

  ngOnInit(): void {
    this.getKablos()
  }

  setSelectedKablo(kablo:TelefonGenelDizaynKablo){
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
    this.telefonGenelDizaynService.getKablolar().subscribe(response=>{
      this.kablolar=response.data
    })
  }
  deleteKablo(kablo:TelefonGenelDizaynKablo){

    this.telefonGenelDizaynService.deleteGenelDizayn(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()

    })

  }

}
