import { Component, OnInit } from '@angular/core';
import { CctvIsEmri } from 'src/app/Models/cctvIsEmri';
import { CctvKabloService } from 'src/app/Services/cctv-kablo.service';

@Component({
  selector: 'app-cctv-is-emirleri',
  templateUrl: './cctv-is-emirleri.component.html',
  styleUrls: ['./cctv-is-emirleri.component.css']
})
export class CctvIsEmirleriComponent implements OnInit {

  filterText:string
  isEmirleri:CctvIsEmri[]
  constructor(private cctvService:CctvKabloService) { }

  ngOnInit(): void {
    this.getCctvIsEmirleri();
  }

  getCctvIsEmirleri(){
    this.cctvService.getIsEmirleri().subscribe(response=>{
      this.isEmirleri=response.data
      console.log(response)
    })
  }
}
