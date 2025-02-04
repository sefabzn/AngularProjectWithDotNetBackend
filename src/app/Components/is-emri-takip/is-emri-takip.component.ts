import { Component, OnInit } from '@angular/core';
import { IsEmriService } from 'src/app/Services/is-emri.service';
import { IsEmriModel } from 'src/app/Models/isEmri';

@Component({
  selector: 'app-is-emri-takip',
  templateUrl: './is-emri-takip.component.html',
  styleUrls: ['./is-emri-takip.component.css']
})
export class IsEmriTakipComponent implements OnInit {
  isEmriList: IsEmriModel[] = [];

  constructor(private isEmriService: IsEmriService) { }

  ngOnInit(): void {
    this.getIsEmriList();
  }

  getIsEmriList() {
    this.isEmriService.getAll().subscribe(response => {
      if (response.success) {
        this.isEmriList = response.data;
      } else {
        console.error(response.message);
      }
    }, error => {
      console.error('An error occurred while fetching İş Emri data', error);
    });
  }
}
