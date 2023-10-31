import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GunlukRapor } from 'src/app/Models/gunlukRapor';
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
  firstDate: Date;
  lastDate: Date;
  selectedMakineId: number;
  teknikKayipChart:Chart<"pie", number[], string>
  makineler: Makine[];
  ortalamaGunlukAriza: any;
  ortalamaRenkDegisimKaybi: number;
  ortalamaKesitDegisimKaybi: number;
  ortalamaKopmaKaybi: number;
  ortalamaIsinma: number;

  constructor(
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
 
  getMakineler() {
    this.makineService.getMakinas().subscribe((response) => {
      this.makineler = response.data;
      this.selectedMakineId=this.makineler[0].id
    });
  }
  getAnalysis() {

    this.makineService.getRaporAnalysis(this.selectedMakineId,this.firstDate,this.lastDate).subscribe((response) => {

      this.ortalamaGunlukAriza=response.data.ortalamaAriza
      this.ortalamaRenkDegisimKaybi=response.data.ortalamaRenkDegisimKaybi
      this.ortalamaKesitDegisimKaybi=response.data.ortalamaKesitDegisimKaybi
      this.ortalamaKopmaKaybi=response.data.ortalamaKopmaKaybi
      this.ortalamaIsinma=response.data.ortalamaIsinma
      this.getChart()

    })
  }
 
  
}
