import { Component, OnInit } from '@angular/core';
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
  constructor(private operatorIsEmriService:OperatorIsEmriService) { }

  ngOnInit(): void {
    this.getIsEmirleri();
  }

  getIsEmirleri(){
    this.operatorIsEmriService.getIsEmirleri().subscribe(response=>{
      this.operatorIsEmirleri=response.data
    })
  }
}
