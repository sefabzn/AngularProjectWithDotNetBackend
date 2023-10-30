import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CctvIsEmri } from 'src/app/Models/cctvIsEmri';
import { paginationProps } from 'src/app/Models/paginationProps';
import { IsEmriService } from 'src/app/Services/is-emri.service';

@Component({
  selector: 'app-cctv-is-emirleri',
  templateUrl: './cctv-is-emirleri.component.html',
  styleUrls: ['./cctv-is-emirleri.component.css']
})
export class CctvIsEmirleriComponent implements OnInit {

  selectedIsEmri:CctvIsEmri
  filterText:string
  isEmirleri:CctvIsEmri[]
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private isEmriService:IsEmriService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCctvIsEmirleri();
  }

  setSelectedIsEmri(isEmri:CctvIsEmri){
    this.selectedIsEmri=isEmri
  }
  setRowColor(isEmri:CctvIsEmri){
    if (isEmri===this.selectedIsEmri) {
      return "table-primary"
    }
    else{
      return ""
    }
  }
  getCctvIsEmirleri(){
    this.isEmriService.getAll().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
  deleteIsEmri(isEmri:CctvIsEmri){
    this.isEmriService.delete(isEmri).subscribe(Response=>{
      this.toastrService.info(Response.message,"İşlem Başarılı")
      location.reload()
    })
  }
}
