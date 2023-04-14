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
  startDate: string;
  finishDate: string;
  kablolar: KabloUretim[];
  makineler: Makine[];
  selectedMakine: Makine;
  selectedMakineIsmi: string;
  verimlilikChart: Chart;
  chartGun: Chart;
  chartUretim: Chart;
  ortalamaVerimlilik: number;
  secilenGun: number;
  calisilanGun: number;
  verimliGun:number;
  verimsizGun:number
  toplamMetraj:number;
  constructor(
    private makineService: MakineService,
    private kabloUretimService: KabloUretimService
  ) {}

  ngOnInit(): void {
    this.getMakineler();
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
            data: [this.ortalamaVerimlilik, 100-this.ortalamaVerimlilik],
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
  setSelectedMakine(makine: string) {
    return this.makineler.filter((x) => x.makineIsmi == makine)[0];
  }
  getMakineler() {
    this.makineService.getMakinas().subscribe((response) => {
      this.makineler = response.data;
    });
  }
  getCalisilanGun(data: KabloUretim[]) {
    this.secilenGun;
    
    let newDate = new Date(this.startDate);
    let lastDate = new Date(this.finishDate);
    this.secilenGun =
      (lastDate.getTime() - newDate.getTime()) / (1000 * 3600 * 24) + 1;

    let Gun = 0;
    let metraj=0;
    let verimliGun=0;
    
    data.forEach(element => {
      metraj+=element.metraj
    });

    for (newDate; newDate <= lastDate; newDate.setDate(newDate.getDate() + 1)) {
      if ((data.filter(x=>x.tarih.substring(0,10)==newDate.toISOString().substring(0,10))).length>0) {
        let verimlilik=0;
        let subData=(data.filter(x=>x.tarih.substring(0,10)==newDate.toISOString().substring(0,10)))
        subData.forEach(element => {
          verimlilik+=element.verimlilik
        });
        let ortalamaVerimlilik= verimlilik/subData.length
        if (ortalamaVerimlilik>=70) {
          verimliGun+=1
        }
        Gun+=1        
      }
    }
    this.toplamMetraj=metraj;
    this.calisilanGun = Gun;
    this.verimliGun =verimliGun
    this.verimsizGun=Gun-verimliGun
  }
  getOrtalamaVerimlilik(data: KabloUretim[]) {
    let gunlukVerimlilik = 0;
    data.forEach((element) => {
      gunlukVerimlilik += element.verimlilik;
    });
    this.ortalamaVerimlilik = gunlukVerimlilik / data.length; //aynı günde birden fazla kablo üretilmişse bu da hatalı cıkar
  }
  getKablolarByDateRangeAndMakine(
    startDate,
    finishDate,
    selectedMakineIsmi: string
  ) {
    this.selectedMakine = this.setSelectedMakine(selectedMakineIsmi);
    if (startDate && finishDate) {
      this.kabloUretimService
        .getKablolarbyDateRangeAndMakine(
          startDate,
          finishDate,
          this.selectedMakine.id
        )
        .subscribe((response) => {
          this.kablolar = response.data;
          this.getOrtalamaVerimlilik(this.kablolar);
          this.getCalisilanGun(this.kablolar);
          this.getChart();
          console.log(this.kablolar);
        });
    } else {
      // A MESSAGE
    }
  }
}
