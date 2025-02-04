import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IsEmriService } from 'src/app/Services/is-emri.service';
import { MakineService } from 'src/app/Services/makine.service';
import { GenelDizaynService } from 'src/app/Services/genel-dizayn.service';
import { IsEmriModel } from 'src/app/Models/isEmri';
import { Makine } from 'src/app/Models/makine';
import { GenelDizaynBase } from 'src/app/Models/genelDizaynBase';

@Component({
  selector: 'app-is-emri-add',
  templateUrl: './is-emri-add.component.html',
  styleUrls: ['./is-emri-add.component.css']
})
export class IsEmriAddComponent implements OnInit {
  isEmriForm: FormGroup;
  makineList: Makine[] = [];
  genelDizaynList: GenelDizaynBase[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private isEmriService: IsEmriService,
    private makineService: MakineService,
    private genelDizaynService: GenelDizaynService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createIsEmriForm();
    this.getMakineList();
    this.getGenelDizaynList();
  }

  createIsEmriForm() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    this.isEmriForm = this.formBuilder.group({
      id: [0],
      isim: ['', Validators.required],
      metraj: [0, Validators.required],
      tamamlanmaDurumu: [false],
      makineId: [0, Validators.required],
      tarih: [today, Validators.required],
      degistiren: ['', Validators.required],
      genelDizaynId: [0, Validators.required]
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
      this.toastrService.error('An error occurred while fetching the machine list');
    });
  }

  getGenelDizaynList() {
    this.genelDizaynService.getAll().subscribe(response => {
      if (response.success) {
        this.genelDizaynList = response.data;
      } else {
        this.toastrService.error(response.message);
      }
    }, error => {
      this.toastrService.error('An error occurred while fetching the genel dizayn list');
    });
  }

  addIsEmri() {
    if (this.isEmriForm.valid) {
      let isEmriModel = Object.assign({}, this.isEmriForm.value);
      
      isEmriModel.barkodString = this.generateBarkodString(isEmriModel);
      this.isEmriService.add(isEmriModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success('İş Emri successfully added');
          this.router.navigate(['/IsEmriTakip']);
        } else {
          this.toastrService.error(response.message);
        }
      }, responseError => {
        this.toastrService.error('An error occurred while adding İş Emri');
      });
    }
  }

  generateBarkodString(isEmriModel: IsEmriModel): string {
    const shortDate = new Date(isEmriModel.tarih).toISOString().split('T')[0];
    return `${isEmriModel.tur}${isEmriModel.isim}${isEmriModel.makineId}${shortDate}`;
  }
}
