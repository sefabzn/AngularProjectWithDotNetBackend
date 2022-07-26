import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';

@Component({
  selector: 'app-kablo-uretim',
  templateUrl: './kablo-uretim.component.html',
  styleUrls: ['./kablo-uretim.component.css']
})
export class KabloUretimComponent implements OnInit {

  selectedDate:any
  kablolar:KabloUretim[]=[]
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
  getKablolarByDate(date:string){
    if(date){
      this.kabloUretimService.getKablolarbyDate(date).subscribe(response=>{
        this.kablolar=response.data
      })
    }
    else{
      this.toastrService.error("Geçerli Bir Tarih Giriniz","Tarih Hatası")
    }
    
  }

}
