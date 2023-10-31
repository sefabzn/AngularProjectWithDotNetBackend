import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Makine } from 'src/app/Models/makine';
import { Sarfiyat } from 'src/app/Models/sarfiyat';
import { MakineService } from 'src/app/Services/makine.service';
import { SarfiyatService } from 'src/app/Services/sarfiyat.service';

@Component({
  selector: 'app-sarfiyat-grafik',
  templateUrl: './sarfiyat-grafik.component.html',
  styleUrls: ['./sarfiyat-grafik.component.css'],
})
export class SarfiyatGrafikComponent implements OnInit {
  makineler: Makine[];
  selectedMakineId: number;
  sarfiyatChart: Chart<'pie', number[], string>;
  firstDate: Date;
  lastDate: Date;
  toplamHurdaCu: any;
  toplamHurdaPVC: any;
  toplamKullanilanCu: any;
  toplamKullanilanPVC: any;

  constructor(
    private makineService: MakineService,
  ) {}

  ngOnInit(): void {
    this.getMakineler();
  }

  getChart() {
    if (this.sarfiyatChart) {
      this.sarfiyatChart.destroy();
    }
    Chart.register(...registerables);
    this.sarfiyatChart = new Chart('sarfiyatChart', {
      type: 'pie',
      data: {
        labels: [
          'Kullanılan PVC (gr)',
          'Kullanılan Cu (gr)',
          'Hurda PVC (gr)',
          'Hurda Cu (gr)',
        ],
        datasets: [
          {
            label: 'Malihler mal olur',
            data: [
              this.toplamKullanilanPVC,
              this.toplamKullanilanCu,
              this.toplamHurdaPVC,
              this.toplamHurdaCu,
            ],
            backgroundColor: [
              'rgba(100,50,255,1.0)',
              'rgba(75,250,255,0.8)',
              'rgba(100,200,0,0.6)',
              'rgba(150,0,75,0.4)',
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
      this.selectedMakineId = this.makineler[0].id;
    });
  }
  getAnalysis() {
    this.makineService
      .getRaporAnalysis(this.selectedMakineId, this.firstDate, this.lastDate)
      .subscribe((response) => {
        this.toplamKullanilanPVC = response.data.toplamPvc;
        this.toplamKullanilanCu = response.data.toplamCu;
        this.toplamHurdaPVC = response.data.hurdaPvc;
        this.toplamHurdaCu = response.data.hurdaCu;
        this.getChart();
        
      });
  }
}
