import { Component, OnInit } from '@angular/core';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { GunlukRapor } from 'src/app/Models/gunlukRapor';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { Makine } from 'src/app/Models/makine';
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
  getGunlukRaporlar(makineIsmi:string,tarih:string){
    
    this.gunlukRaporService.getGunlukRaporlar(makineIsmi,tarih).subscribe(response=>{
      this.gunlukUretimler=response.data
    },errorResponse=>{
      if(errorResponse.error.errors.Tarih[0]){
        this.toastrService.warning("Uygun bir tarih seçiniz!","Tarih Hatalı")
      }
      
    })
  }
}
