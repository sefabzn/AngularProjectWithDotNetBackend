import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { TelefonIsEmri } from 'src/app/Models/telefon-is-emri';
import { TelefonIsEmriService } from 'src/app/Services/TelefonKabloService/telefon-is-emri.service';
@Component({
  selector: 'app-telefon-is-emirleri',
  templateUrl: './telefon-is-emirleri.component.html',
  styleUrls: ['./telefon-is-emirleri.component.css']
})
export class TelefonIsEmirleriComponent implements OnInit {

  selectedIsEmri:TelefonIsEmri
  filterText:string
  isEmirleri:TelefonIsEmri[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private telefonIsEmriService:TelefonIsEmriService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getTelefonIsEmirleri();
  }

  setSelectedIsEmri(isEmri:TelefonIsEmri){
    this.selectedIsEmri=isEmri
  }
  setRowColor(isEmri:TelefonIsEmri){
    if (isEmri===this.selectedIsEmri) {
      return "table-primary"
    }
    else{
      return ""
    }
  }
  getTelefonIsEmirleri(){
    this.telefonIsEmriService.getIsEmirleri().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
  deleteIsEmri(isEmri:TelefonIsEmri){
    this.telefonIsEmriService.deleteIsEmri(isEmri).subscribe(Response=>{
      this.toastrService.info(Response.message,"İşlem Başarılı")
      location.reload()
    })
  }

}
