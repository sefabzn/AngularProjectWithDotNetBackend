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
  
  // Pagination properties
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  

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
      if (response.success) {
        this.genelDizaynList = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching the genel dizayn list');
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

  deleteGenelDizayn() {
    if (this.selectedGenelDizayn) {
      this.genelDizaynService.delete(this.selectedGenelDizayn).subscribe(response => {
        if (response.success) {
          this.toastrService.success('Genel Dizayn successfully deleted');
          this.getGenelDizaynList(); // Refresh the list after deletion
        } else {
          this.toastrService.error(response.message);
        }
      }, error => {
        this.toastrService.error('An error occurred while deleting');
      });
    } else {
      this.toastrService.warning('Please select a Genel Dizayn to delete');
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getGenelDizaynList();
  }

 
}