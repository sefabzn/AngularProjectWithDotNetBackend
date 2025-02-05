import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
import { GenelDizaynBase } from 'src/app/Models/genelDizaynBase';

@Component({
  selector: 'app-genel-dizayn-list',
  templateUrl: './genel-dizayn-list.component.html',
  styleUrls: ['./genel-dizayn-list.component.css']
})
export class GenelDizaynListComponent implements OnInit {
  genelDizaynList: GenelDizaynBase[] = [];
  selectedGenelDizayn: GenelDizaynBase;
  selectedGenelDizaynId: number;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private genelDizaynService: GenelDizaynService
  ) { }

  ngOnInit(): void {
    this.getGenelDizaynList();
  }

  getGenelDizaynList() {
    this.genelDizaynService.getAll().subscribe(response => {
      this.genelDizaynList = response.data;
    });
  }

  selectGenelDizayn(genelDizayn: GenelDizaynBase) {
    this.selectedGenelDizayn = genelDizayn;
    this.selectedGenelDizaynId = genelDizayn.id;
  }

  updateGenelDizayn() {
    if (this.selectedGenelDizaynId) {
      this.router.navigate(['/geneldizayn/update', this.selectedGenelDizaynId]);
    } else {
      this.toastrService.warning('Please select a Genel Dizayn to update');
    }
  }
}