import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
import { KesitYapisiService } from 'src/app/Services/kesit-yapisi.service';
import { GenelDizaynBase } from 'src/app/Models/genelDizaynBase';
import { TURLER } from 'src/app/constants/constants';

@Component({
  selector: 'app-genel-dizayn-add',
  templateUrl: './genel-dizayn-add.component.html',
  styleUrls: ['./genel-dizayn-add.component.css']
})
export class GenelDizaynAddComponent implements OnInit {
  genelDizaynForm: FormGroup;
  turler = TURLER;
  kesitCapiList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private genelDizaynService: GenelDizaynService,
    private kesitYapisiService: KesitYapisiService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createGenelDizaynForm();
    this.getKesitCapiList();
  }

  createGenelDizaynForm() {
    this.genelDizaynForm = this.formBuilder.group({
      kablo: ['', Validators.required],
      tur: ['', Validators.required],
      kesitCapi: [null, Validators.required],
      orgu: [0, Validators.required],
      orguTelYapisi: ['', Validators.required],
      polyesterOlcusu: [0, Validators.required],
      folyoTipi: ['', Validators.required],
      folyoOlcusu: [0, Validators.required],
      disKilif: ['', Validators.required],
      disCap: [0, Validators.required],
      back: [0, Validators.required],
      ayna: [0, Validators.required],
      kalip: ['', Validators.required],
      core: ['', Validators.required],
      hatve: [0, Validators.required],
      tarih: [new Date().toISOString().split('T')[0], Validators.required],
      damarSayisi: [0, Validators.required],
      girilenDamarSayisi: [0, Validators.required],
      zorlama: ['', Validators.required],
      degistirilmeTarihi: [new Date().toISOString().split('T')[0], Validators.required],
      degistiren: ['', Validators.required]
    });
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

  addGenelDizayn() {
    if (this.genelDizaynForm.valid) {
      let genelDizaynModel = Object.assign({}, this.genelDizaynForm.value);
      this.genelDizaynService.add(genelDizaynModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success('Genel Dizayn successfully added');
          this.router.navigate(['/DizaynSecmeMenu']);
        } else {
          this.toastrService.error(response.message);
        }
      }, responseError => {
        this.toastrService.error('An error occurred while adding Genel Dizayn');
      });
    }
  }
}