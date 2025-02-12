import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SevkIrsaliye } from 'src/app/Models/sevkIrsaliye';
import { SevkIrsaliyeService } from 'src/app/Services/sevk-irsaliye.service';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
import { forkJoin } from 'rxjs';
import { MusteriService } from 'src/app/Services/musteri.service';

@Component({
  selector: 'app-sevk-irsaliye-detail',
  templateUrl: './sevk-irsaliye-detail.component.html',
  styleUrls: ['./sevk-irsaliye-detail.component.css']
})
export class SevkIrsaliyeDetailComponent implements OnInit {
  irsaliye: SevkIrsaliye;
  loading: boolean = true;

  constructor(
    private sevkIrsaliyeService: SevkIrsaliyeService,
    private customerService: MusteriService,
    private kabloUretimService: KabloUretimService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getIrsaliyeDetails(params['id']);
      }
    });
  }

  getIrsaliyeDetails(id: number) {
    this.loading = true;
    this.sevkIrsaliyeService.getDeliveryNoteById(id).subscribe(response => {
      if (response.success) {
        this.irsaliye = response.data;
        this.getRelatedData();
      } else {
        this.toastrService.error(response.message);
        this.router.navigate(['/irsaliye']);
      }
    });
  }

  getRelatedData() {
    if (this.irsaliye) {
      const customerRequest = this.customerService.getById(this.irsaliye.musteriId);
      
      const kabloUretimRequests = this.irsaliye.kalemler.map(kalem => 
        this.kabloUretimService.getById(kalem.kabloUretimId)
      );

      forkJoin([customerRequest, ...kabloUretimRequests]).subscribe(
        ([customerResponse, ...kabloUretimResponses]: [any, ...any[]]) => {
          if (customerResponse.success) {
            this.irsaliye.musteri = customerResponse.data;
          }

          kabloUretimResponses.forEach((response, index) => {
            if (response.success) {
              this.irsaliye.kalemler[index].kabloUretim = response.data;
            }
          });

          this.loading = false;
        },
        error => {
          this.toastrService.error('İlgili veriler yüklenirken bir hata oluştu');
          this.loading = false;
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/irsaliye']);
  }
}
