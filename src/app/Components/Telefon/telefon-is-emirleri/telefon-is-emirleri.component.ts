import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IsEmriModel } from 'src/app/Models/isEmri';
import { paginationProps } from 'src/app/Models/paginationProps';
import { IsEmriService } from 'src/app/Services/is-emri.service';
@Component({
  selector: 'app-telefon-is-emirleri',
  templateUrl: './telefon-is-emirleri.component.html',
  styleUrls: ['./telefon-is-emirleri.component.css']
})
export class TelefonIsEmirleriComponent implements OnInit {

  selectedIsEmri:IsEmriModel
  filterText:string
  isEmirleri:IsEmriModel[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private isEmriService:IsEmriService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getTelefonIsEmirleri();
  }

  setSelectedIsEmri(isEmri:IsEmriModel){
    this.selectedIsEmri=isEmri
  }
  setRowColor(isEmri:IsEmriModel){
    if (isEmri===this.selectedIsEmri) {
      return "table-primary"
    }
    else{
      return ""
    }
  }
  getTelefonIsEmirleri(){
    this.isEmriService.getAll().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
  deleteIsEmri(isEmri:IsEmriModel){
    this.isEmriService.delete(isEmri).subscribe(Response=>{
      this.toastrService.info(Response.message,"İşlem Başarılı")
      location.reload()
    })
  }

}
