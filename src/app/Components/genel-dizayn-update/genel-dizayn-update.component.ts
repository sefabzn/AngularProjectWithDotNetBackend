import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KesitYapisiService } from 'src/app/Services/kesit-yapisi.service';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
import { GenelDizaynBase } from 'src/app/Models/genelDizaynBase';
import { TURLER } from 'src/app/constants/constants';

@Component({
  selector: 'app-genel-dizayn-update',
  templateUrl: './genel-dizayn-update.component.html',
  styleUrls: ['./genel-dizayn-update.component.css']
})
export class GenelDizaynUpdateComponent implements OnInit {
  genelDizaynForm: FormGroup;
  genelDizaynId: number;
  genelDizayn: GenelDizaynBase;
  turler = TURLER;
  kesitCapiList: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private genelDizaynService: GenelDizaynService,
    private kesitYapisiService: KesitYapisiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genelDizaynId = params['id'];
      this.getGenelDizaynById(this.genelDizaynId);
    });
    this.getKesitCapiList();
  }
  getKesitCapiList() {
    this.kesitYapisiService.getKesitYapisiList().subscribe(response => {
      if (response.success) {
        this.kesitCapiList = response.data.map(kesit => kesit.kesitCapi);
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching the kesit capi list');
    });
  }
  createGenelDizaynForm() {
    this.genelDizaynForm = this.formBuilder.group({
      kablo: [this.genelDizayn.kablo, Validators.required],
      tur: [this.genelDizayn.tur, Validators.required],
      kesitCapi: [this.genelDizayn.kesitCapi, Validators.required],
      orgu: [this.genelDizayn.orgu, Validators.required],
      orguTelYapisi: [this.genelDizayn.orguTelYapisi, Validators.required],
      polyesterOlcusu: [this.genelDizayn.polyesterOlcusu, Validators.required],
      folyoTipi: [this.genelDizayn.folyoTipi, Validators.required],
      folyoOlcusu: [this.genelDizayn.folyoOlcusu, Validators.required],
      disKilif: [this.genelDizayn.disKilif, Validators.required],
      disCap: [this.genelDizayn.disCap, Validators.required],
      back: [this.genelDizayn.back, Validators.required],
      ayna: [this.genelDizayn.ayna, Validators.required],
      kalip: [this.genelDizayn.kalip, Validators.required],
      core: [this.genelDizayn.core, Validators.required],
      hatve: [this.genelDizayn.hatve, Validators.required],
      tarih: [this.genelDizayn.tarih, Validators.required],
      damarSayisi: [this.genelDizayn.damarSayisi, Validators.required],
      girilenDamarSayisi: [this.genelDizayn.girilenDamarSayisi, Validators.required],
      zorlama: [this.genelDizayn.zorlama, Validators.required],
      degistirilmeTarihi: [this.genelDizayn.degistirilmeTarihi, Validators.required],
      degistiren: [this.genelDizayn.degistiren, Validators.required]
    });
  }

  getGenelDizaynById(id: number) {
    this.genelDizaynService.getById(id).subscribe(response => {
      this.genelDizayn = response.data;
      this.createGenelDizaynForm();
    });
  }

  updateGenelDizayn() {
    if (this.genelDizaynForm.valid) {
      let genelDizaynModel = Object.assign({}, this.genelDizaynForm.value);
      this.genelDizaynService.update(genelDizaynModel).subscribe(response => {
        this.toastrService.success('Genel Dizayn successfully updated');
        this.router.navigate(['/geneldizayn/list']);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }
  }
}