import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Makine } from 'src/app/Models/makine';
import { Sarfiyat } from 'src/app/Models/sarfiyat';
import { MakineService } from 'src/app/Services/makine.service';
import { SarfiyatService } from 'src/app/Services/sarfiyat.service';

@Component({
  selector: 'app-sarfiyat-grafik',
  templateUrl: './sarfiyat-grafik.component.html',
  styleUrls: ['./sarfiyat-grafik.component.css']
})
export class SarfiyatGrafikComponent implements OnInit {
  startDate: string;
  finishDate: string;
  sarfiyatlar: Sarfiyat[];
  makineler: Makine[];
  selectedMakineId: number;
  selectedMakineIsmi: string;
  sarfiyatChart:Chart;
  toplamKullanilanPVC:number
  toplamKullanilanCu:number;
  toplamHurdaPVC:number;
  toplamHurdaCu:number;

  constructor(private makineService:MakineService,
    private sarfiyatService:SarfiyatService) { }

  ngOnInit(): void {
    this.getMakineler()
  }
  getChart(){
    Chart.register(...registerables);
    this.sarfiyatChart = new Chart("sarfiyatChart", {
      type: 'pie',
      data: {
          labels: ["Kullanılan PVC (gr)","Kullanılan Cu (gr)","Hurda PVC (gr)","Hurda Cu (gr)"],
          datasets: [{
              label: 'Malihler mal olur',
              data: [this.toplamKullanilanPVC,this.toplamKullanilanCu,this.toplamHurdaPVC,this.toplamHurdaCu],
              backgroundColor: [
                "rgba(100,50,255,1.0)",
                "rgba(75,250,255,0.8)",
                "rgba(100,200,0,0.6)",
                "rgba(150,0,75,0.4)",
              ],
              borderWidth: 1
          }]
      },
      options: {
        
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  getMakineler() {
    this.makineService.getMakinas().subscribe((response) => {
      this.makineler = response.data;
    });
  }
  setMakineId(selectedMakineIsmi:string){

   this.selectedMakineId= this.makineler.filter(x=>x.makineIsmi==selectedMakineIsmi)[0].id
  }
  getSarfiyat(data:Sarfiyat[]){

    let kullanilanPVC=0;
    let kullanilanCu=0;
    let hurdaCu=0;
    let hurdaPVC=0;
    this.setMakineId(this.selectedMakineIsmi)
    let subData=  data.filter(x=>x.makineId==this.selectedMakineId)

    subData.forEach(element => {
      console.log(element)
      kullanilanPVC+=element.kullanilanPvc;
      kullanilanCu+=element.kullanilanCu;
      hurdaPVC+=element.hurdaPvc;
      hurdaCu+=element.hurdaCu;
    });

    this.toplamKullanilanCu=kullanilanCu
    this.toplamKullanilanPVC=kullanilanPVC
    this.toplamHurdaCu=hurdaCu;
    this.toplamHurdaPVC=hurdaPVC;

  }
  getData(startDate:string, finishDate:string ){

    if(startDate && finishDate){

      this.sarfiyatService.getAllByDateRange(startDate,finishDate).subscribe(response=>{
        this.sarfiyatlar=response.data
        this.getSarfiyat(this.sarfiyatlar)
        this.getChart()
      })

    }
    else{
      //error message
    }


  }
}
