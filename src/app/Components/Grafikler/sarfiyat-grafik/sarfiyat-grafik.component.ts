import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-sarfiyat-grafik',
  templateUrl: './sarfiyat-grafik.component.html',
  styleUrls: ['./sarfiyat-grafik.component.css']
})
export class SarfiyatGrafikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    const sarfiyatChart = new Chart("sarfiyatChart", {
      type: 'pie',
      data: {
          labels: ["Kullanılan PVC","Kullanılan Cu","Hurda PVC","Hurda Cu"],
          datasets: [{
              label: 'Malihler mal olur',
              data: [25,75,30,45],
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

}
