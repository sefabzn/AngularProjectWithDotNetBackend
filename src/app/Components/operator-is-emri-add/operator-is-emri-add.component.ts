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
  isEmriModel: OperatorIsEmri;
  selectedMakine: Makine;
  selectedKesit: number;
  makineler: Makine[];
  kullanicilar: Kullanici[];
  tarih: string = new Date().toISOString();
  tahminiSure: number;
  ortakMakineler: Makine[];
  asyncResult: Makine[];
  kesitTablosu:MakineKesitHizTablosu[];
  uygunKesitler:number[];
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
  createOperatorIsEmriForm() {
    this.ortakMakineIsEmriForm = this.formBuilder.group({
      operator: [''],
      urunIsmi: [''],
      dizaynTuru: [''],
      kesitCapi: [0],
      toplamMetraj: [0],
      disCap: [0],
      back: [0],
      ayna: [0],
      kalip: [''],
    });
  }
  addToOrtakMakineler(makine: Makine) {
    this.uygunKesitler=[];
    if (
      !this.ortakMakineler.includes(makine)
    ) {
      this.ortakMakineler.push(makine);
    } else {
      this.ortakMakineler = this.ortakMakineler.filter(
        (x) => x.makineIsmi != makine.makineIsmi
      );
    }
    let size = this.ortakMakineler.length
    if(size>0){
      let makineIds=this.ortakMakineler.map(x=>x.id)
      let kesitler = this.kesitTablosu.filter(x=>makineIds.includes(x.makineId)).map(x=>x.kesitCapi)
      kesitler.forEach(kesit => {
        if (kesitler.filter(x=> x==kesit).length==size) { //liste içinde  1 kesit türünün ne kadar tekrar ettigini buluyorum
          if(!this.uygunKesitler.includes(kesit)){      //eğer listenin boyutuyla aynı sayıda tekrar varsa uygunKesitler listesine ekliyorum
            this.uygunKesitler.push(kesit)
          }
         
        }
      });

      
      this.uygunKesitler.sort()
      
    }
   
  
  }

  verimlilikPayi(makine: Makine) {
    let toplamVerimlilik = 0;
    this.ortakMakineler.forEach((makine) => {
      toplamVerimlilik += makine.verimlilik;
    });
    return makine.verimlilik / toplamVerimlilik;
  }
  add() {
    let toplamMetraj = this.ortakMakineIsEmriForm.value['toplamMetraj'];
    if (this.ortakMakineIsEmriForm.valid) {
     
      this.ortakMakineler.forEach((makine) => {
        this.isEmriModel = Object.assign({}, this.ortakMakineIsEmriForm.value);
        this.isEmriModel['metraj'] = Math.round(
          toplamMetraj * this.verimlilikPayi(makine)
        );
        this.isEmriModel['makineIsmi'] = makine.makineIsmi;
        this.isEmriModel['tarih'] = this.tarih;
        this.isEmriModel['degistiren'] = localStorage.getItem('user');
        this.operatorIsEmriService.add(this.isEmriModel).subscribe(
          (data) => {
            this.toastrService.success(data.message, 'Başarılı');
          },
          (responseError) => {
            console.log(responseError);
          }
        );
      });
    } else {
      console.log('Form is not valid');
    }
  }
  getOrtalamaVerimlilik() {
    let toplamVerimlilik = 0;
    this.ortakMakineler.forEach((makine) => {
      toplamVerimlilik += makine.verimlilik;
    });
    return toplamVerimlilik / this.ortakMakineler.length;
  }

  async hesapla() {
    if (this.ortakMakineIsEmriForm.valid) {
      let toplamHiz: number = 0;
      let kesitHizi: number;
      await this.makineKesitHizTabloService
        .getAll()
        .toPromise()
        .then((response) => {
          this.ortakMakineler.forEach((makine) => {
            
            kesitHizi = response.data.filter(
              (x) =>
                x.makineId == makine.id && x.kesitCapi == this.selectedKesit
            )[0].hiz;
            toplamHiz += kesitHizi;
          });
        });
      this.getTahminiSure(toplamHiz);
    }
  }

  private getTahminiSure(toplamHiz: number) {
    let gercekKesitHizi = (toplamHiz * this.getOrtalamaVerimlilik()) / 100;
    this.tahminiSure =
      this.ortakMakineIsEmriForm.value['toplamMetraj'] / gercekKesitHizi / 60;
    console.log(
      'toplam hizi = ' +
        toplamHiz +
        '  verimlilik = ' +
        this.getOrtalamaVerimlilik() +
        '  '
    );
    this.toastrService.info(
      'Bu makineyle bu üretim ' + this.tahminiSure + ' saat sürecektir!',
      'Süre Hesaplandı'
    );
  }
  getKesitTablosu(){
    this.makineKesitHizTabloService.getAll().subscribe((response) => {
      this.kesitTablosu=response.data
     });
  }
  checkIfMakineWorksKesit(makineler: Makine[], kesit: number): boolean {
    let eslesenler = [];
    let tamEslesme:boolean=true
  
    makineler.forEach(makine => {
      eslesenler.push(this.kesitTablosu.filter(x=>x.kesitCapi==kesit && x.makineId==makine.id)[0])
    });
    console.log(eslesenler.length);
    eslesenler.forEach(element => {
      if (element==undefined) {
        tamEslesme=false
      }
    });
    return tamEslesme
  }
  
}
