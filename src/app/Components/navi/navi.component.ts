import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from 'src/app/Services/exchange-rate.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  dolarKuru
  euroKuru
  constructor(private exchangeRateService:ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getDollarRate().subscribe(response=>{
      this.dolarKuru=response.data
    })
    this.exchangeRateService.getEuroRate().subscribe(response=>{
      this.euroKuru=response.data
    })
  }

}
