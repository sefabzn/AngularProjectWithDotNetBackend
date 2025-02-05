import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { KabloUretimService } from 'src/app/Services/kablo-uretim.service';
import { KesitYapisiService } from 'src/app/Services/kesit-yapisi.service';
import { MakineService } from 'src/app/Services/makine.service';
import { IsEmriService } from 'src/app/Services/is-emri.service';
import { KesitYapisi } from 'src/app/Models/kesitYapisi';
import { Makine } from 'src/app/Models/makine';
import { IsEmriModel } from 'src/app/Models/isEmri';

@Component({
  selector: 'app-kablo-uretim-add',
  templateUrl: './kablo-uretim-add.component.html',
  styleUrls: ['./kablo-uretim-add.component.css']
})
export class KabloUretimAddComponent implements OnInit {
  kabloForm: FormGroup;
  kesitCapiList: KesitYapisi[] = [];
  makineList: Makine[] = [];
  isEmriList: IsEmriModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private kabloService: KabloUretimService,
    private kesitYapisiService: KesitYapisiService,
    private makineService: MakineService,
    private isEmriService: IsEmriService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createKabloForm();
    this.getKesitCapiList();
    this.getMakineList();
    this.getIsEmriList();
  }

  createKabloForm() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    this.kabloForm = this.formBuilder.group({
      kabloIsmi: ['', Validators.required],
      makineId: [0, Validators.required],
      kesitCapi: ['', Validators.required],
      isEmriId: [null],
      metraj: [0, Validators.required],
      kopma: [0, Validators.required],
      renkDegisimi: [0, Validators.required],
      genelAriza: [0, Validators.required],
      hurdaPvc: [0, Validators.required],
      hurdaCu: [0, Validators.required],
      calismaSuresi: [1, [Validators.required, Validators.min(1)]],
      kayipZaman: [0, Validators.required],
      verimlilik: [0, Validators.required],
      tarih: [today, Validators.required],
      degistiren: ['', Validators.required]
    });
  }

  getKesitCapiList() {
    this.kesitYapisiService.getKesitYapisiList().subscribe(response => {
      if (response.success) {
        this.kesitCapiList = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching the kesit capi list');
    });
  }

  getMakineList() {
    this.makineService.getMakinas().subscribe(response => {
      if (response.success) {
        this.makineList = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching the makine list');
    });
  }

  getIsEmriList() {
    this.isEmriService.getAll().subscribe(response => {
      if (response.success) {
        this.isEmriList = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching the isEmri list');
    });
  }

  addKablo() {
    if (this.kabloForm.valid) {
      let kabloModel = Object.assign({}, this.kabloForm.value);
     
      this.kabloService.add(kabloModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success('Kablo successfully added');
          this.router.navigate(['/kablo-uretim-list']);
        } else {
          this.toastrService.error(response.message);
        }
      }, responseError => {
        this.toastrService.error('An error occurred while adding Kablo');
      });
    }
  }
}