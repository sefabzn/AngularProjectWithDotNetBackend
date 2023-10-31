import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cctvGenelDizaynKablo } from 'src/app/Models/cctvGenelDizaynKablo';
import { paginationProps } from 'src/app/Models/paginationProps';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';

@Component({
  selector: 'app-cctv-genel-dizayn',
  templateUrl: './cctv-genel-dizayn.component.html',
  styleUrls: ['./cctv-genel-dizayn.component.css']
})
export class CctvGenelDizaynComponent implements OnInit {

  selectedKabloId:number
  selectedKablo:cctvGenelDizaynKablo
  kablolar:cctvGenelDizaynKablo[]=[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(
    private toastrService:ToastrService,
    private GenelDizaynService:GenelDizaynService) { }

  ngOnInit(): void {
    this.getKablos()
  }

  setSelectedKablo(kablo:cctvGenelDizaynKablo){
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
    this.GenelDizaynService.getAll('CCTV').subscribe(response=>{
      this.kablolar=response.data
    })
  }
  deleteKablo(kablo:cctvGenelDizaynKablo){

    this.GenelDizaynService.delete(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()

    })

  }
}
