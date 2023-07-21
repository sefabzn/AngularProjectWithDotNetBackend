import { Component, OnInit, Optional } from '@angular/core';
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
import { OrtakIsEmri } from 'src/app/Models/ortakIsEmri';

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
  ortakMakineIsEmriForm: FormGroup;
  isEmriModel: OrtakIsEmri;
  selectedMakine: Makine;
  selectedKesit: number;
  makineler: Makine[];
  kullanicilar: Kullanici[];
  tarih: string = new Date().toISOString();
  tahminiSure: number;
  ortakMakineler: Makine[];
  asyncResult: Makine[];
  kesitTablosu: MakineKesitHizTablosu[];
  uygunKesitler: number[];
  ortakMakineIsimleri: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private makineService: MakineService,
    private kullaniciService: KullaniciService,
    private operatorIsEmriService: OperatorIsEmriService,
    private makineKesitHizTabloService: MakineKesitHizTablosuService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOrtakOperatorIsEmriForm();
    this.getMakineler();
    this.getKullanicilar();
    this.getKesitTablosu();
    this.ortakMakineler = [];
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
  createOrtakOperatorIsEmriForm() {
    this.ortakMakineIsEmriForm = this.formBuilder.group({
      urunIsmi: [''],
      dizaynTuru: [''],
      kesit: [0],
      metraj: [0],
      disCap: [0],
      back: [0],
      ayna: [0],
      kalip: [''],
      makineIsimleri: [''],
    });
  }
  addToOrtakMakineler(makine: Makine) {
    this.uygunKesitler = [];
    if (!this.ortakMakineler.includes(makine)) {
      this.ortakMakineler.push(makine);
    } else {
      this.ortakMakineler = this.ortakMakineler.filter(
        (x) => x.makineIsmi != makine.makineIsmi
      );
    }
    let size = this.ortakMakineler.length;
    if (size > 0) {
      let makineIds = this.ortakMakineler.map((x) => x.id);
      let kesitler = this.kesitTablosu
        .filter((x) => makineIds.includes(x.makineId))
        .map((x) => x.kesitCapi);
      kesitler.forEach((kesit) => {
        if (kesitler.filter((x) => x == kesit).length == size) {
          //liste içinde  1 kesit türünün ne kadar tekrar ettigini buluyorum
          if (!this.uygunKesitler.includes(kesit)) {
            //eğer listenin boyutuyla aynı sayıda tekrar varsa uygunKesitler listesine ekliyorum
            this.uygunKesitler.push(kesit);
          }
        }
      });

      this.uygunKesitler.sort();
    }
  }

  add() {
    if (this.ortakMakineIsEmriForm.valid) {
      this.ortakMakineIsimleri=[]
      for (let makine of this.ortakMakineler) {
        this.ortakMakineIsimleri.push(makine.makineIsmi);
      }

      this.isEmriModel = Object.assign({}, this.ortakMakineIsEmriForm.value);

      this.isEmriModel['makineIsimleri'] = this.ortakMakineIsimleri;
      this.isEmriModel['operator'] = localStorage.getItem('user');
      this.isEmriModel['degistiren'] = localStorage.getItem('user');
      this.isEmriModel['tarih'] = this.tarih;

      console.log(this.isEmriModel);
      this.operatorIsEmriService.addOrtak(this.isEmriModel).subscribe(
        (data) => {
          this.toastrService.success('Başarılı ');
        },
        (responseError) => {
          console.log(responseError);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  sureHesapla() {
    if (this.ortakMakineIsEmriForm.valid) {
      this.ortakMakineIsimleri=[]
      
      for (let makine of this.ortakMakineler) {
        this.ortakMakineIsimleri.push(makine.makineIsmi);
      }
      let sureModel : OrtakIsEmri= Object.assign({}, this.ortakMakineIsEmriForm.value);
      sureModel['makineIsimleri'] = this.ortakMakineIsimleri;
      console.log(sureModel)
      this.operatorIsEmriService
        .sureHesapla(sureModel)
        .subscribe((data) => {
          this.toastrService.success(
            'Bu Üretim toplam  ' + data.toFixed(2) + '  saat sürecektir!'
          );
        });
    }
  }

  getKesitTablosu() {
    this.makineKesitHizTabloService.getAll().subscribe((response) => {
      this.kesitTablosu = response.data;
    });
  }
  checkIfMakineWorksKesit(makineler: Makine[], kesit: number): boolean {
    let eslesenler = [];
    let tamEslesme: boolean = true;

    makineler.forEach((makine) => {
      eslesenler.push(
        this.kesitTablosu.filter(
          (x) => x.kesitCapi == kesit && x.makineId == makine.id
        )[0]
      );
    });
    eslesenler.forEach((element) => {
      if (element == undefined) {
        tamEslesme = false;
      }
    });
    return tamEslesme;
  }
}
