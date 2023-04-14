import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { Makine } from 'src/app/Models/makine';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
import { MakineService } from 'src/app/Services/makine.service';

@Component({
  selector: 'app-extruder-teknik-kayip-grafik',
  templateUrl: './extruder-teknik-kayip-grafik.component.html',
  styleUrls: ['./extruder-teknik-kayip-grafik.component.css'],
})
export class ExtruderTeknikKayipGrafikComponent implements OnInit {
  startDate: string;
  finishDate: string;
  kablolar: KabloUretim[];
  makineler: Makine[];
  selectedMakine:Makine;
  selectedMakineIsmi:string;
  ortalamaGunlukAriza: number;
  ortalamaRenkDegisimKaybi: number;
  ortalamaKesitDegisimKaybi: number; //bu biraz meşakatli
  ortalamaKopmaKaybi:number
  ortalamaIsinma:number
  teknikKayipChart:Chart

  constructor(
    private kabloUretimService: KabloUretimService,
    private makineService: MakineService
  ) {}

 
  ngOnInit(): void {
    this.getMakineler();
  }
  
  
  getChart(){
    Chart.register(...registerables);
    if (this.teknikKayipChart){
      this.teknikKayipChart.destroy()
    } 

    this.teknikKayipChart = new Chart('teknikKayipChart', {
      type: 'pie',
      data: {
        labels: [
          'Ortalama Günlük Arıza',
          'Ortalama Renk Kaybı',
          'Ortalama Kesit Degisimi Kaybı',
          'Ortalama Kopma Kaybı',
          'Ortalama Isınma',
        ],
        datasets: [
          {
            label: 'Extruder Teknik Kayıp',
            data: [this.ortalamaGunlukAriza, this.ortalamaRenkDegisimKaybi,this.ortalamaKesitDegisimKaybi,this.ortalamaKopmaKaybi , this.ortalamaIsinma],
            backgroundColor: [
              'rgba(100,50,255,1.0)',
              'rgba(75,250,255,0.8)',
              'rgba(100,200,0,0.6)',
              'rgba(150,0,75,0.4)',
              'rgba(200,80,90,0.2)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  setSelectedMakine(makine:string){
   return (this.makineler.filter(x=>x.makineIsmi==makine)[0])
  }
  getMakineler() {
    this.makineService.getMakinas().subscribe((response) => {
      this.makineler = response.data;
    });
  }
  
  getKablolarByDateRangeAndMakine(startDate, finishDate,selectedMakineIsmi:string) {
    
    this.selectedMakine=this.setSelectedMakine(selectedMakineIsmi)
    if (startDate && finishDate) {
      this.kabloUretimService
        .getKablolarbyDateRangeAndMakine(startDate, finishDate,this.selectedMakine.id)
        .subscribe((response) => {
          this.kablolar = response.data;
          this.getOrtalamaGunlukAriza(this.kablolar);
          this.getChart()
          console.log(this.kablolar)
        });
    } else {
      // A MESSAGE
    }
  }

  getOrtalamaGunlukAriza(data: KabloUretim[]) {
    let gunlukAriza: number = 0;
    let gunlukRenkDegisimikaybi:number=0;
    let gunlukKopmaKaybi:number=0;
    data.forEach((element) => {
      gunlukAriza += element.genelAriza;
      gunlukRenkDegisimikaybi+=element.renkDegisimi*this.selectedMakine.renkDegisimi
      gunlukKopmaKaybi+=element.kopma*this.selectedMakine.kopma
    });

    this.ortalamaGunlukAriza = gunlukAriza / data.length;
    this.ortalamaRenkDegisimKaybi=gunlukRenkDegisimikaybi/data.length
    this.ortalamaKopmaKaybi=gunlukKopmaKaybi/data.length
    this.ortalamaKesitDegisimKaybi=this.selectedMakine.kesitDegisimi
    this.ortalamaIsinma=this.selectedMakine.isinma
  }
}
