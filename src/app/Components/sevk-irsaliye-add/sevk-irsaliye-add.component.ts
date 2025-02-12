import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SevkIrsaliyeService } from 'src/app/Services/sevk-irsaliye.service';
import { SevkIrsaliyeCreateDto } from 'src/app/Models/sevkIrsaliyeCreateDto';
import { SevkIrsaliyeKalem } from 'src/app/Models/sevkIrsaliyeKalem';
import { MusteriService } from 'src/app/Services/musteri.service';
import { Musteri } from 'src/app/Models/musterı';
import { KabloUretim } from 'src/app/Models/kabloUretim';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';

// Add this interface at the top of the file
interface KalemDisplay extends SevkIrsaliyeKalem {
  kabloIsmi?: string;
}

@Component({
  selector: 'app-sevk-irsaliye-add',
  templateUrl: './sevk-irsaliye-add.component.html',
  styleUrls: ['./sevk-irsaliye-add.component.css']
})
export class SevkIrsaliyeAddComponent implements OnInit {
  irsaliyeForm: FormGroup;
  kalemler: KalemDisplay[] = [];
  customers: Musteri[] = [];
  kalemForm: FormGroup;
  kabloUretimler: KabloUretim[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sevkIrsaliyeService: SevkIrsaliyeService,
    private musteriService: MusteriService,
    private kabloUretimService: KabloUretimService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createIrsaliyeForm();
    this.createKalemForm();
    this.getCustomers();
    this.getKabloUretimler();
  }

  createIrsaliyeForm() {
    this.irsaliyeForm = this.formBuilder.group({
      musteriId: ['', Validators.required],
      tarih: [new Date().toISOString().split('T')[0], Validators.required],
      aciklama: [''],
      durum: [true]
    });
  }

  createKalemForm() {
    this.kalemForm = this.formBuilder.group({
      sevkIrsaliyeId: [0],
      kabloUretimId: [0, Validators.required],
      kabloUretim: [null],
      miktar: [0, [Validators.required, Validators.min(1)]],
      fiyat: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addKalem(kalem: KalemDisplay) {
    this.kalemler.push(kalem);
  }

  removeKalem(index: number) {
    this.kalemler.splice(index, 1);
  }

  // Update the submitKalem method
  submitKalem() {
    if (this.kalemForm.valid) {
      const selectedKabloUretim = this.kalemForm.get('kabloUretim')?.value;
      console.log('Selected KabloUretim:', selectedKabloUretim); // Debug log
      
      const kalem: KalemDisplay = {
        sevkIrsaliyeId: 0,
        kabloUretimId: selectedKabloUretim.id,
        miktar: this.kalemForm.get('miktar')?.value,
        fiyat: this.kalemForm.get('fiyat')?.value,
        kabloIsmi: selectedKabloUretim.kabloIsmi // Change this line
      };
      
      console.log('Created Kalem:', kalem); // Debug log
      this.addKalem(kalem);
      this.kalemForm.reset({
        sevkIrsaliyeId: 0,
        kabloUretimId: 0,
        kabloUretim: null,
        miktar: 0,
        fiyat: 0
      });
      this.toastrService.success('Kalem başarıyla eklendi');
    } else {
      this.toastrService.error('Lütfen tüm zorunlu alanları doldurunuz');
    }
  }

  addIrsaliye() {
    if (this.irsaliyeForm.valid) {
      const irsaliyeDto: SevkIrsaliyeCreateDto = {
        deliveryNote: {
          ...this.irsaliyeForm.value,
          toplamTutar: this.calculateTotal()
        },
        // Remove the kabloIsmi property before sending to API
        items: this.kalemler.map(({ kabloIsmi, ...kalem }) => kalem)
      };

      this.sevkIrsaliyeService.createDeliveryNote(irsaliyeDto).subscribe(response => {
        if (response.success) {
          this.toastrService.success('Sevk İrsaliyesi başarıyla eklendi');
          this.router.navigate(['/irsaliye']);
        } else {
          this.toastrService.error(response.message);
        }
      }, error => {
        this.toastrService.error('Sevk İrsaliyesi eklenirken bir hata oluştu');
        console.log(irsaliyeDto);
        
      });
    } else {
      this.toastrService.error('Lütfen tüm zorunlu alanları doldurunuz');
    }
  }

  private calculateTotal(): number {
    return this.kalemler.reduce((sum, kalem) => sum + (kalem.fiyat * kalem.miktar), 0);
  }

  getCustomers() {
    this.musteriService.getAll().subscribe(response => {
      if (response.success) {
        this.customers = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('Müşteriler yüklenirken bir hata oluştu');
    });
  }

  getKabloUretimler() {
    this.kabloUretimService.getKablolar().subscribe(response => {
      if (response.success) {
        this.kabloUretimler = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    });
  }

  // Update the onKabloUretimSelect method
  onKabloUretimSelect(event: any) {
    const selectedId = event.target.value;
    const selectedKabloUretim = this.kabloUretimler.find(k => k.id === +selectedId);
    console.log('Selected KabloUretim in select:', selectedKabloUretim); // Debug log
    
    if (selectedKabloUretim) {
      this.kalemForm.patchValue({
        kabloUretimId: selectedKabloUretim.id,
        kabloUretim: selectedKabloUretim
      });
    }
  }
}