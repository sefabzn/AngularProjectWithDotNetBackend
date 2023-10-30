import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { TelefonGenelDizaynKablo } from 'src/app/Models/telefon-genel-dizayn-kablo';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
@Component({
  selector: 'app-telefon-genel-dizayn',
  templateUrl: './telefon-genel-dizayn.component.html',
  styleUrls: ['./telefon-genel-dizayn.component.css']
})
export class TelefonGenelDizaynComponent implements OnInit {

  selectedKablo:TelefonGenelDizaynKablo
  selectedKabloId:number
  kablolar:TelefonGenelDizaynKablo[]=[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(
    private toastrService:ToastrService,
    private genelDizaynService:GenelDizaynService) { }

  ngOnInit(): void {
    this.getKablos()
  }

  setSelectedKablo(kablo:TelefonGenelDizaynKablo){
    this.selectedKablo=kablo
    this.selectedKabloId=kablo.id
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
    this.genelDizaynService.getAll().subscribe(response=>{
      this.kablolar=response.data
    })
  }
  deleteKablo(kablo:TelefonGenelDizaynKablo){

    this.genelDizaynService.delete(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()

    })

  }

}
