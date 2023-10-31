import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { Makine } from 'src/app/Models/makine';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
import { MakineService } from 'src/app/Services/makine.service';
@Component({
  selector: 'app-uretim-grafik',
  templateUrl: './uretim-grafik.component.html',
  styleUrls: ['./uretim-grafik.component.css'],
})
export class UretimGrafikComponent implements OnInit {
 
  verimlilikChart: Chart<"pie", number[], string>;
  chartGun: Chart<"pie", number[], string>;
  chartUretim: Chart<"pie", number[], string>;
  ortalamaVerimlilik: number;
  verimliGun: number;
  verimsizGun: number;
  secilenGun: number;
  calisilanGun: number;
  makineler: Makine[];
  selectedMakineId: number;
  startDate: Date;
  finishDate: Date;
  toplamMetraj: number;

  constructor(
    private makineService: MakineService,
    private kabloUretimService: KabloUretimService
  ) {}

  ngOnInit(): void {
    this.getMakineler()
  }
  getChart() {
    if (this.verimlilikChart && this.chartUretim && this.chartGun) {
      this.verimlilikChart.destroy();
      this.chartUretim.destroy();
      this.chartGun.destroy();
    }
    Chart.register(...registerables);
    this.verimlilikChart = new Chart('verimlilikChart', {
      type: 'pie',
      data: {
        labels: ['GünlükVerimlilik'],
        datasets: [
          {
            label: 'Malihler mal olur',
            data: [this.ortalamaVerimlilik, 1-this.ortalamaVerimlilik],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
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

    this.chartUretim = new Chart('uretimChart', {
      type: 'pie',
      data: {
        labels: ['Verimli Gün', 'Verimsiz Gün'],
        datasets: [
          {
            label: 'Malihler mal olur',
            data: [ this.verimliGun, this.verimsizGun],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(0,0,255,0.2)',
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
    this.chartGun = new Chart('gunChart', {
      type: 'pie',
      data: {
        labels: ['Seçilen Gün', 'Çalışılan Gün'],
        datasets: [
          {
            label: 'Malihler mal olur',
            data: [this.secilenGun, this.calisilanGun],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
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

  getMakineler(){
    this.makineService.getMakinas().subscribe(response=>{
    
      this.makineler=response.data
      this.selectedMakineId=this.makineler[0].id
    })
  }
  getAnalysis(){
    this.makineService.getRaporAnalysis(this.selectedMakineId,this.startDate,this.finishDate).subscribe(response=>{
      
      this.toplamMetraj=response.data.toplamMetraj
      this.ortalamaVerimlilik=response.data.ortalamaVerimlilik
      this.verimliGun=response.data.verimliGun
      this.verimsizGun=response.data.verimsizGun
      this.secilenGun=response.data.secilenGun
      this.calisilanGun=response.data.calisilanGun
      this.getChart()
      
    })
  }
 
}
