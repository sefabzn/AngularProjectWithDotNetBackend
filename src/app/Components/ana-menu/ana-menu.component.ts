
import { Component, OnInit } from '@angular/core';

import { SurecService } from 'src/app/Services/surec.service';

@Component({
  selector: 'app-ana-menu',
  templateUrl: './ana-menu.component.html',
  styleUrls: ['./ana-menu.component.css']
})
export class AnaMenuComponent implements OnInit {

  constructor(private surecService:SurecService) { }

  ngOnInit(): void {
 
  }

}
