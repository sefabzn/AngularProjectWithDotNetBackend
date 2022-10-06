import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { paginationProps } from 'src/app/Models/paginationProps';
import { Sarfiyat } from 'src/app/Models/sarfiyat';
import { SarfiyatService } from 'src/app/Services/sarfiyat.service';

@Component({
  selector: 'app-sarfiyat',
  templateUrl: './sarfiyat.component.html',
  styleUrls: ['./sarfiyat.component.css'],
})
export class SarfiyatComponent implements OnInit {
  selectedDate: any;
  sarfiyatList: Sarfiyat[];
  selectedSarfiyat:Sarfiyat
  paginationProp:paginationProps= new paginationProps(1,0,10)

  onTableDataChange(event:any){
    this.paginationProp.page =event;
  }
  constructor(private sarfiyatService: SarfiyatService,
    private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.sarfiyatService.getAll().subscribe((Response) => {
      this.sarfiyatList = Response.data;
      console.log(this.sarfiyatList);
    });
  }
  getAllByDate(date: string) {
    // if (date) {
    //   this.sarfiyatService.getAllByDate(date).subscribe((response) => {
    //     this.sarfiyatList = response.data;
    //   });
    // } else {
    //   this.getAll();
    // }
  }
  setSelectedSarfiyat(sarfiyat:Sarfiyat){
    this.selectedSarfiyat=sarfiyat
  }
  setRowColor(sarfiyat:Sarfiyat){
    if (sarfiyat===this.selectedSarfiyat) {
      return "table-primary"
    }
    else{
      return ""
    }
  }
  delete(sarfiyat:Sarfiyat){

    this.sarfiyatService.delete(sarfiyat).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()
    })
  }
}
