import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CctvIsEmri } from 'src/app/Models/cctvIsEmri';
import { CctvKabloService } from 'src/app/Services/cctv-kablo.service';

@Component({
  selector: 'app-cctv-is-emirleri',
  templateUrl: './cctv-is-emirleri.component.html',
  styleUrls: ['./cctv-is-emirleri.component.css']
})
export class CctvIsEmirleriComponent implements OnInit {

  selectedIsEmri:CctvIsEmri
  filterText:string
  isEmirleri:CctvIsEmri[]
  constructor(private cctvService:CctvKabloService,
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
    this.cctvService.getIsEmirleri().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
  deleteIsEmri(isEmri:CctvIsEmri){
    this.cctvService.deleteIsEmri(isEmri).subscribe(Response=>{
      this.toastrService.info(Response.message,"İşlem Başarılı")
      location.reload()
    })
  }
}
