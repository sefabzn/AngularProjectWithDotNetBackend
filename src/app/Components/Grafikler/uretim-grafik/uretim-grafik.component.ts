import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-uretim-grafik',
  templateUrl: './uretim-grafik.component.html',
  styleUrls: ['./uretim-grafik.component.css']
})
export class UretimGrafikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    const verimlilikChart = new Chart("verimlilikChart", {
      type: 'pie',
      data: {
          labels: ["GünlükVerimlilik"],
          datasets: [{
              label: 'Malihler mal olur',
              data: [25,75],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  
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
   
  
  const chartUretim = new Chart("uretimChart", {
    type: 'pie',
    data: {
        labels: ['Toplam Üretim',"Verimli Gün","Verimsiz Gün"],
        datasets: [{
            label: 'Malihler mal olur',
            data: [55,62,23],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                "rgba(0,0,255,0.2)"
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
const chartGun = new Chart("gunChart", {
  type: 'pie',
  data: {
      labels: ['Seçilen Gün',"Çalışılan Gün"],
      datasets: [{
          label: 'Malihler mal olur',
          data: [55,62],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
              
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
}
