import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-extruder-teknik-kayip-grafik',
  templateUrl: './extruder-teknik-kayip-grafik.component.html',
  styleUrls: ['./extruder-teknik-kayip-grafik.component.css']
})
export class ExtruderTeknikKayipGrafikComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    Chart.register(...registerables);
    const teknikKayipChart = new Chart("teknikKayipChart", {
      type: 'pie',
      data: {
          labels: ["Günlük Arıza","Renk Kaybı","Kesit Kaybı","Kopma","Isınma"],
          datasets: [{
              label: 'Malihler mal olur',
              data: [25,75,30,45,50],
              backgroundColor: [
                "rgba(100,50,255,1.0)",
                "rgba(75,250,255,0.8)",
                "rgba(100,200,0,0.6)",
                "rgba(150,0,75,0.4)",
                "rgba(200,80,90,0.2)",
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
