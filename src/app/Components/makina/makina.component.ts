import { Component, OnInit } from '@angular/core';
import { Makina } from 'src/app/Models/makina';
import { MakinaService } from 'src/app/Services/makina.service';

@Component({
  selector: 'app-makina',
  templateUrl: './makina.component.html',
  styleUrls: ['./makina.component.css']
})
export class MakinaComponent implements OnInit {

  makinaList:Makina[]=[];
  currentMakina?:Makina;
  constructor(private makinaService:MakinaService) { }
  ngOnInit(): void {
    this.getMakinas();
  }

  getMakinas(){
    this.makinaService.getMakinas().subscribe((response)=>{
      this.makinaList=response.data
    })
  }
  setCurrentMakina(makina:Makina){
    this.currentMakina=makina
  }
  getCurrentMakinaClass(makina:Makina){
    if(makina==this.currentMakina){
      return "list-group-item active"
    }
    else{
      
      return "list-group-item"

    }
  }

}
