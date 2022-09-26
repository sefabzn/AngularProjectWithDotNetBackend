import { Component, OnInit } from '@angular/core';
import { Makine } from 'src/app/Models/makine';
import { MakineService } from 'src/app/Services/makine.service';

@Component({
  selector: 'app-planlama',
  templateUrl: './planlama.component.html',
  styleUrls: ['./planlama.component.css']
})
export class PlanlamaComponent implements OnInit {

  makineler:Makine[]
  secilenMakineler:Makine[]=[]
  constructor(private makineService:MakineService) { }

  ngOnInit(): void {
    this.getMakineler()
  }
  getMakineler(){
    this.makineService.getMakinas().subscribe(response=>{
      this.makineler=response.data
    })
  }
  addToList(makine:Makine){
   
    if( !this.secilenMakineler.includes(makine)){
      this.secilenMakineler.push(makine)
    }
  }
  get(){
    console.log(this.secilenMakineler)
  }
}
