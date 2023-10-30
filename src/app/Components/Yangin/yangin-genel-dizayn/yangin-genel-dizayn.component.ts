import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { YanginGenelDizaynKablo } from 'src/app/Models/yangin-genel-dizayn-kablo';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
@Component({
  selector: 'app-yangin-genel-dizayn',
  templateUrl: './yangin-genel-dizayn.component.html',
  styleUrls: ['./yangin-genel-dizayn.component.css']
})
export class YanginGenelDizaynComponent implements OnInit {
  selectedKabloId:number
  selectedKablo:YanginGenelDizaynKablo
  kablolar:YanginGenelDizaynKablo[]=[]
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

  setSelectedKablo(kablo:YanginGenelDizaynKablo){
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
  deleteKablo(kablo:YanginGenelDizaynKablo){

    this.genelDizaynService.delete(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()

    })

  }

}
