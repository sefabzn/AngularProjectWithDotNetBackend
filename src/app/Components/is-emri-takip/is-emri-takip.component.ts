import { Component, OnInit } from '@angular/core';
import { IsEmriService } from 'src/app/Services/is-emri.service';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
import { IsEmriModel } from 'src/app/Models/isEmri';
import { GenelDizaynBase } from 'src/app/Models/genelDizaynBase';

@Component({
  selector: 'app-is-emri-takip',
  templateUrl: './is-emri-takip.component.html',
  styleUrls: ['./is-emri-takip.component.css']
})
export class IsEmriTakipComponent implements OnInit {
  isEmriList: IsEmriModel[] = [];
  genelDizaynList: GenelDizaynBase[] = [];

  constructor(
    private isEmriService: IsEmriService,
    private genelDizaynService: GenelDizaynService
  ) { }

  ngOnInit(): void {
    this.getIsEmriList();
    this.getGenelDizaynList();
  }

  getIsEmriList() {
    this.isEmriService.getAll().subscribe(response => {
      if (response.success) {
        this.isEmriList = response.data;
        this.mapTurToIsEmri();
      } else {
        console.error(response.message);
      }
    }, error => {
      console.error('An error occurred while fetching İş Emri data', error);
    });
  }

  getGenelDizaynList() {
    this.genelDizaynService.getAll().subscribe(response => {
      if (response.success) {
        this.genelDizaynList = response.data;
        this.mapTurToIsEmri();
      } else {
        console.error(response.message);
      }
    }, error => {
      console.error('An error occurred while fetching Genel Dizayn data', error);
    });
  }

  mapTurToIsEmri() {
    if (this.isEmriList.length > 0 && this.genelDizaynList.length > 0) {
      this.isEmriList.forEach(isEmri => {
        const genelDizayn = this.genelDizaynList.find(gd => gd.id === isEmri.genelDizaynId);
        if (genelDizayn) {
          isEmri.tur = genelDizayn.tur;
        }
      });
    }
  }
}
