import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { YanginIsEmri } from 'src/app/Models/yangin-is-emri';
import { YanginIsEmriService } from 'src/app/Services/YanginKabloServices/yangin-is-emri.service';
@Component({
  selector: 'app-yangin-is-emirleri',
  templateUrl: './yangin-is-emirleri.component.html',
  styleUrls: ['./yangin-is-emirleri.component.css']
})
export class YanginIsEmirleriComponent implements OnInit {

  selectedIsEmri:YanginIsEmri
  filterText:string
  isEmirleri:YanginIsEmri[]
  constructor(private yanginIsEmriService:YanginIsEmriService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getTelefonIsEmirleri();
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
  getTelefonIsEmirleri(){
    this.yanginIsEmriService.getIsEmirleri().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
  deleteIsEmri(isEmri:YanginIsEmri){
    this.yanginIsEmriService.deleteIsEmri(isEmri).subscribe(Response=>{
      this.toastrService.info(Response.message,"İşlem Başarılı")
      location.reload()
    })
  }

}
