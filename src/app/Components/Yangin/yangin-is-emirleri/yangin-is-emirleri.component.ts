import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { YanginIsEmri } from 'src/app/Models/yangin-is-emri';
import { IsEmriService } from 'src/app/Services/is-emri.service';
@Component({
  selector: 'app-yangin-is-emirleri',
  templateUrl: './yangin-is-emirleri.component.html',
  styleUrls: ['./yangin-is-emirleri.component.css']
})
export class YanginIsEmirleriComponent implements OnInit {

  selectedIsEmri:YanginIsEmri
  filterText:string
  isEmirleri:YanginIsEmri[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private isEmriService:IsEmriService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getIsEmirleri();
  }

  setSelectedIsEmri(isEmri:YanginIsEmri){
    this.selectedIsEmri=isEmri
  }
  setRowColor(isEmri:YanginIsEmri){
    if (isEmri===this.selectedIsEmri) {
      return "table-primary"
    }
    else{
      return ""
    }
  }
  getIsEmirleri(){
    this.isEmriService.getAll().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
  deleteIsEmri(isEmri:YanginIsEmri){
    this.isEmriService.delete(isEmri).subscribe(Response=>{
      this.toastrService.info(Response.message,"İşlem Başarılı")
      location.reload()
    })
  }

}
