import { Component, OnInit } from '@angular/core';
import { SevkIrsaliye } from 'src/app/Models/sevkIrsaliye';
import { SevkIrsaliyeService } from 'src/app/Services/sevk-irsaliye.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sevk-irsaliye-list',
  templateUrl: './sevk-irsaliye-list.component.html',
  styleUrls: ['./sevk-irsaliye-list.component.css']
})
export class SevkIrsaliyeListComponent implements OnInit {
  sevkIrsaliyeleri: SevkIrsaliye[] = [];
  selectedIrsaliye: SevkIrsaliye | null = null;
  
  // Pagination properties
  paginationProp = {
    page: 1,
    count: 0,
    tableSize: 10
  };

  constructor(
    private sevkIrsaliyeService: SevkIrsaliyeService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIrsaliyeler();
  }

  getIrsaliyeler() {
    this.sevkIrsaliyeService.getAllWithItemsAndCustomer().subscribe(response => {
      if (response.success) {
        this.sevkIrsaliyeleri = response.data;
        this.paginationProp.count = this.sevkIrsaliyeleri.length;
      } else {
        this.toastrService.error(response.message);
      }
    });
  }

  onTableDataChange(event: any) {
    this.paginationProp.page = event;
    this.getIrsaliyeler();
  }

  selectIrsaliye(irsaliye: SevkIrsaliye) {
    this.selectedIrsaliye = irsaliye;
    
  }

  deleteIrsaliye() {
    if (this.selectedIrsaliye) {
      if (confirm('Are you sure you want to delete this delivery note?')) {
        this.sevkIrsaliyeService.deleteDeliveryNote(this.selectedIrsaliye).subscribe(response => {
          if (response.success) {
            this.toastrService.success('Sevk İrsaliyesi başarıyla silindi');
            this.getIrsaliyeler();
            this.selectedIrsaliye = null;
          } else {
            this.toastrService.error(response.message);
          }
        }, error => {
          this.toastrService.error('Sevk İrsaliyesi silinirken bir hata oluştu');
        });
      }
    } else {
      this.toastrService.warning('Lütfen silinecek irsaliyeyi seçiniz');
    }
  }

  showDetails() {
    if (this.selectedIrsaliye) {
      this.router.navigate(['/sevk-irsaliye/detail', this.selectedIrsaliye.id]);
    } else {
      this.toastrService.warning('Lütfen detayını görmek istediğiniz irsaliyeyi seçiniz');
    }
  }
}
