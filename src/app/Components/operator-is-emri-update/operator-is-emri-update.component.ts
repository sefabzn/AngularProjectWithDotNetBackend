import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-operator-is-emri-update',
  templateUrl: './operator-is-emri-update.component.html',
  styleUrls: ['./operator-is-emri-update.component.css']
})
export class OperatorIsEmriUpdateComponent implements OnInit {
  ortakMakineIsEmriForm: FormGroup;
  isEmriModel: OperatorIsEmri;
  selectedMakine: Makine;
  selectedKesit: number;
  makineler: Makine[];
  kullanicilar: Kullanici[];
  tahminiSure: number;
  asyncResult: Makine[];
  kesitTablosu:MakineKesitHizTablosu[];
  uygunKesitler:number[];
  isEmri:OperatorIsEmri
  isEmriId:number
  isFormCreated:boolean=false
  constructor(private formBuilder: FormBuilder,
    private makineService: MakineService,
    private kullaniciService: KullaniciService,
    private operatorIsEmriService: OperatorIsEmriService,
    private makineKesitHizTabloService: MakineKesitHizTablosuService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params)=>{
      
      if (params["isEmriId"]) {
        this.isEmriId=params["isEmriId"]
        this.getMakineler();

        
      }
      else{
        this.toastrService.warning("Geçerli Kablo Yok")
      }

    })
   
  }
  getIsEmri(){
    this.operatorIsEmriService.getById(this.isEmriId).subscribe(response=>{
      this.isEmri=response.data
      console.log(response.data)

      this.createOperatorIsEmriForm()
      this.isFormCreated=true
      console.log(this.isEmri.makineIsmi)
      this.getKesitler(this.makineler.filter(x=>x.makineIsmi==this.isEmri.makineIsmi)[0])

    })  
  }
  getMakineler() {
    this.makineService.getMakinas().subscribe((response) => {
      this.makineler = response.data;
      this.getKullanicilar()
    });
  }
  getKullanicilar() {
    this.kullaniciService.getKullanicis().subscribe((response) => {
      this.kullanicilar = response.data;
      this.getKesitTablosu()

    });
  }
  createOperatorIsEmriForm() {
    this.ortakMakineIsEmriForm = this.formBuilder.group({
      operator: [this.isEmri.operator],
      makineIsmi:[this.isEmri.makineIsmi],
      urunIsmi: [this.isEmri.urunIsmi],
      dizaynTuru: [this.isEmri.dizaynTuru],
      kesitCapi: [this.isEmri.kesitCapi],
      metraj: [this.isEmri.metraj],
      disCap: [this.isEmri.disCap],
      back: [this.isEmri.back],
      ayna: [this.isEmri.ayna],
      kalip: [this.isEmri.kalip],
    });
  }
  getKesitler(makine:Makine) {
    this.selectedMakine=makine
    this.uygunKesitler=[]
    if(makine){
      let kesitler = this.kesitTablosu.filter(x=>x.makineId==makine.id).map(x=>x.kesitCapi)
      kesitler.forEach(kesit => {
        if(!this.uygunKesitler.includes(kesit)){      //eğer listenin boyutuyla aynı sayıda tekrar varsa uygunKesitler listesine ekliyorum
          this.uygunKesitler.push(kesit)
        }
      });
      
      this.uygunKesitler.sort()
    }
   
  
  }

 
  update() {
    if (this.ortakMakineIsEmriForm.valid) {
     
     
        this.isEmriModel = Object.assign({}, this.ortakMakineIsEmriForm.value);
        this.isEmriModel["id"]=this.isEmri.id
        this.isEmriModel['makineIsmi'] = this.selectedMakine.makineIsmi;
        this.isEmriModel['degistiren'] = localStorage.getItem('user');
        console.log(this.isEmriModel)
        this.operatorIsEmriService.update(this.isEmriModel).subscribe(
          (data) => {
            this.toastrService.success(data.message, 'Başarılı');
          },
          (responseError) => {
            console.log(responseError);
          }
        );
      ;
    } else {
      console.log('Form is not valid');
    }
  }
  getOrtalamaVerimlilik() {
    let toplamVerimlilik = 0;
    toplamVerimlilik=this.selectedMakine.verimlilik
    return toplamVerimlilik 
  }

  async hesapla() {
    if (this.ortakMakineIsEmriForm.valid) {
      let Hiz: number = 0;
      this.selectedKesit= this.ortakMakineIsEmriForm.value["kesitCapi"]
      console.log(this.selectedKesit,this.selectedMakine.id,);
      
      Hiz=this.kesitTablosu.filter(x=>x.kesitCapi==this.selectedKesit && x.makineId==this.selectedMakine.id)[0].hiz
      this.getTahminiSure(Hiz);
    }
  }

  private getTahminiSure(toplamHiz: number) {
    let gercekKesitHizi = (toplamHiz * this.getOrtalamaVerimlilik()) / 100;
    this.tahminiSure =
      this.ortakMakineIsEmriForm.value['metraj'] / gercekKesitHizi / 60;
    console.log(
      'toplam hizi = ' +
        toplamHiz +
        '  verimlilik = ' +
        this.getOrtalamaVerimlilik() +
        '  '
    );
    if (this.tahminiSure<4) {
      this.toastrService.info(
     
        'Bu makineyle bu üretim ' + this.tahminiSure.toFixed(2) + ' saat sürecektir! 4 saat altındaki çalışma süresi israftır',
        'Verimsiz Üretim Onay Alın!!!'
      );
      
    }
    else{

    this.toastrService.info(
     
      
      'Bu makineyle bu üretim ' + this.tahminiSure.toFixed(2) + ' saat sürecektir!',
      'Süre Hesaplandı'
      
    );
  }
}

  getKesitTablosu(){
    this.makineKesitHizTabloService.getAll().subscribe((response) => {
      this.kesitTablosu=response.data
      this.getIsEmri()
     });
  }
 
  
}
