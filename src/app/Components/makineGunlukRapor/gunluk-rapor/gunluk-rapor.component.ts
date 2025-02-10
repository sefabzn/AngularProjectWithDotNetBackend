import { Component, OnInit } from '@angular/core';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { GunlukRapor } from 'src/app/Models/gunlukRapor';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { Makine } from 'src/app/Models/makine';
import { paginationProps } from 'src/app/Models/paginationProps';
import { GunlukRaporService } from 'src/app/Services/gunluk-rapor.service';
import { MakineService } from 'src/app/Services/makine.service';

@Component({
  selector: 'app-gunluk-rapor',
  templateUrl: './gunluk-rapor.component.html',
  styleUrls: ['./gunluk-rapor.component.css']
})
export class GunlukRaporComponent implements OnInit {
 
  selectedDate:any
  selectedMakine:any
  makineler:Makine[]
  gunlukUretimler:GunlukRapor[]
  paginationProp:paginationProps= new paginationProps(1,0,10)
  selectedMakineId: number;
  startDate: string;
  finishDate: string;
  gunlukRaporlar: GunlukRapor[] = [];

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private gunlukRaporService:GunlukRaporService,
    private makineService:MakineService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getMakineler()
  }
 
 
  getMakineler(){
    this.makineService.getMakinas().subscribe(response=>{
      this.makineler=response.data
    })
  }

  getRaporByDateRange() {
    if (!this.selectedMakineId) {
      this.toastrService.error('Please select a machine');
      return;
    }
    if (!this.startDate || !this.finishDate) {
      this.toastrService.error('Please select both start and finish dates');
      return;
    }

    this.gunlukRaporService.getRaporByDateRange(
      this.selectedMakineId,
      this.startDate,
      this.finishDate
    ).subscribe(response => {
      if (response.success) {
        this.gunlukRaporlar = response.data;
        if (this.gunlukRaporlar.length === 0) {
          this.toastrService.info('No reports found for the selected date range');
        }
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching reports');
    });
  }

  onMakineSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedMakineId = Number(selectElement.value);
  }

  onDateRangeSelect() {
    if (this.selectedMakineId && this.startDate && this.finishDate) {
      this.getRaporByDateRange();
    }
  }
  
}
