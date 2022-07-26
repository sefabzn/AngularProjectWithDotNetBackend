import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cctvGenelDizaynKablo } from 'src/app/Models/cctvGenelDizaynKablo';
import { CctvKabloService } from 'src/app/Services/cctv-kablo.service';

@Component({
  selector: 'app-cctv-genel-dizayn',
  templateUrl: './cctv-genel-dizayn.component.html',
  styleUrls: ['./cctv-genel-dizayn.component.css']
})
export class CctvGenelDizaynComponent implements OnInit {

  kablolar:cctvGenelDizaynKablo[]=[]
  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private cctvKabloService:CctvKabloService) { }

  ngOnInit(): void {
    this.getKablos()
  }

  getKablos(){
    this.cctvKabloService.getKablolar().subscribe(response=>{
      this.kablolar=response.data
    })
  }
}
