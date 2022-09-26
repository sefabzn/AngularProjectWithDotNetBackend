import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Kullanici } from 'src/app/Models/kullanici';
import { Makine } from 'src/app/Models/makine';
import { MakineKesitHizTablosu } from 'src/app/Models/makineKesitHizTablosu';
import { OperatorIsEmri } from 'src/app/Models/operatorIsEmri';

import { KullaniciService } from 'src/app/Services/kullanici.service';
import { MakineKesitHizTablosuService } from 'src/app/Services/makine-kesit-hiz-tablosu.service';
import { MakineService } from 'src/app/Services/makine.service';
import { OperatorIsEmriService } from 'src/app/Services/operator-is-emri.service';
@Component({
  selector: 'app-operator-is-emri-add',
  templateUrl: './operator-is-emri-add.component.html',
  styleUrls: ['./operator-is-emri-add.component.css'],
})
export class OperatorIsEmriAddComponent implements OnInit {
  operatorIsEmriForm: FormGroup;
  isEmriModel: OperatorIsEmri;
  selectedMakine: Makine;
  selectedKesit: number;
  makineler: Makine[];
  kullanicilar: Kullanici[];
  tarih: string = new Date().toISOString();
  tahminiSure: number;
  constructor(
    private formBuilder: FormBuilder,
    private makineService: MakineService,
    private kullaniciService: KullaniciService,
    private operatorIsEmriService: OperatorIsEmriService,
    private makineKesitHizTabloService: MakineKesitHizTablosuService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOperatorIsEmriForm();
    this.getMakineler();
    this.getKullanicilar();
  }
  getMakineler() {
    this.makineService.getMakinas().subscribe((response) => {
      this.makineler = response.data;
    });
  }
  getKullanicilar() {
    this.kullaniciService.getKullanicis().subscribe((response) => {
      this.kullanicilar = response.data;
    });
  }
  createOperatorIsEmriForm() {
    this.operatorIsEmriForm = this.formBuilder.group({
      operator: ['', Validators.required],
      makineIsmi: ['', Validators.required],
      urunIsmi: ['', Validators.required],
      dizaynTuru: ['', Validators.required],
      kesitCapi: [0, Validators.min(0.001)],
      metraj: [0, Validators.min(1)],
      disCap: [0],
      back: [0],
      ayna: [0],
      kalip: [''],
    });
  }
  add() {
    if (this.operatorIsEmriForm.valid) {
      this.isEmriModel = Object.assign({}, this.operatorIsEmriForm.value);
      this.isEmriModel['tarih'] = this.tarih;
      this.isEmriModel['degistiren'] = localStorage.getItem('user');
      this.operatorIsEmriService.add(this.isEmriModel).subscribe(
        (data) => {
          this.toastrService.success(data.message, 'Başarılı');
          console.log(this.isEmriModel);
        },
        (responseError) => {
          console.log(responseError);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
  hesapla() {
    if (this.operatorIsEmriForm.valid) {
      this.setMakineAndKesit();
      let kesitHizi: number;
      this.makineKesitHizTabloService.getAll().subscribe((response) => {
        kesitHizi = response.data.filter(
          (x) =>
            x.makineId == this.selectedMakine.id &&
            x.kesitCapi == this.selectedKesit
        )[0].hiz;
        this.getTahminiSure(kesitHizi);
      });
    }
  }

  private getTahminiSure(kesitHizi: number) {
    let gercekKesitHizi = (kesitHizi * this.selectedMakine.verimlilik) / 100;
    this.tahminiSure =
      (this.operatorIsEmriForm.value['metraj'] / gercekKesitHizi)/60;
    this.toastrService.info(
      'Bu makineyle bu üretim ' + this.tahminiSure + ' saat sürecektir!',
      'Süre Hesaplandı'
    );
  }

  private setMakineAndKesit() {
    this.selectedMakine = this.makineler.filter(
      (x) => x.makineIsmi == this.operatorIsEmriForm.value['makineIsmi']
    )[0];
    this.selectedKesit = this.operatorIsEmriForm.value['kesitCapi'];
  }
}
