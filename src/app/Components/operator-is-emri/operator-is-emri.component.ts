import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OperatorIsEmri } from 'src/app/Models/operatorIsEmri';
import { OperatorIsEmriService } from 'src/app/Services/operator-is-emri.service';

@Component({
  selector: 'app-operator-is-emri',
  templateUrl: './operator-is-emri.component.html',
  styleUrls: ['./operator-is-emri.component.css']
})
export class OperatorIsEmriComponent implements OnInit {

  filterText:any
  operatorIsEmirleri:OperatorIsEmri[]
  selectedIsEmri:OperatorIsEmri

  page =1;
  count=0;
  tableSize=10;
  
  constructor(private operatorIsEmriService:OperatorIsEmriService,
  private toastrService:ToastrService) 
  { }

  ngOnInit(): void {
    this.getIsEmirleri();
  }

  setSelectedIsEmri(isEmri:OperatorIsEmri){

    this.selectedIsEmri=isEmri
  }
  setRowColor(isEmri:OperatorIsEmri){
    if (isEmri===this.selectedIsEmri) {
      return "table-primary"
    }
    return ""
    
  }
  getIsEmirleri(){
    this.operatorIsEmriService.getIsEmirleri().subscribe(response=>{
      this.operatorIsEmirleri=response.data
    })
  }
  deleteIsEmri(isEmri:OperatorIsEmri){
    this.operatorIsEmriService.delete(isEmri).subscribe(response=>{
      this.toastrService.info(response.message,"İşlem Başarılı")
      location.reload()
    })
  }
  onTableDataChange(event:any){
    this.page =event;
  }
  
}
