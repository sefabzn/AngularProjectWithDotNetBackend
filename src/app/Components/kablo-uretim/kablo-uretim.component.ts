import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { paginationProps } from 'src/app/Models/paginationProps';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';

@Component({
  selector: 'app-kablo-uretim',
  templateUrl: './kablo-uretim.component.html',
  styleUrls: ['./kablo-uretim.component.css']
})
export class KabloUretimComponent implements OnInit {

  startDate:any
  finishDate:any
  kablolar:KabloUretim[]=[]
  selectedKablo:KabloUretim
  paginationProp:paginationProps= new paginationProps(1,0,10)

  constructor(private kabloUretimService:KabloUretimService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getKablolar()
  }

  getKablolar(){
    this.kabloUretimService.getKablolar().subscribe((response)=>{
      this.kablolar=response.data
    })
  }
  getKablolarByDateRange(startDate:string,finishDate:string){
    if(startDate && finishDate){
      this.kabloUretimService.getKablolarbyDateRange(startDate,finishDate).subscribe(response=>{
        this.kablolar=response.data
      })
    }
    else{
      this.getKablolar();
    }
    
  }
  setSelectedKablo(kablo:KabloUretim){
    this.selectedKablo=kablo
  }
  selectedRow(kablo:KabloUretim){
    if  (kablo===this.selectedKablo){

      return "table-primary"
    }
    else{
      return ""
    }
  }
  deleteKablo(kablo:KabloUretim){
    this.kabloUretimService.delete(kablo).subscribe(response=>{
      this.toastrService.info(response.message,"Silme Başarılı")
      location.reload()
    })

  }
  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
}
