import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Surec } from 'src/app/Models/surec';
import { SurecService } from 'src/app/Services/surec.service';

@Component({
  selector: 'app-surec-update',
  templateUrl: './surec-update.component.html',
  styleUrls: ['./surec-update.component.css']
})
export class SurecUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private surecService: SurecService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute) { }

  surecId:number
  surecForm: FormGroup;
  surec:Surec
  surecModel:Surec
  ngOnInit(): void {

    
    this.activatedRoute.params.subscribe((params)=>{
      
      if (params["surecId"]) {
        this.surecId=params["surecId"]
        this.getSurec()

        
      }
      else{
     
 
        this.toastrService.warning("Geçerli Kablo Yok")
      }

    })
  }
  createSurecForm() {
 
    this.surecForm = this.formBuilder.group({
      isim: [this.surec.isim],
      aciklama:[this.surec.aciklama],
      tamamlanmaDurumu: [this.surec.tamamlanmaDurumu],
     
    });
    console.log(1245)
  }
  getSurec(){
    this.surecService.getById(this.surecId).subscribe(response=>{
      this.surec=response.data
      console.log(response.data)

      this.createSurecForm()

    })  
  }
  update() {
    if (this.surecForm.valid) {
     
     
        this.surecModel = Object.assign({}, this.surecForm.value);
        this.surecModel["id"]=this.surec.id
        this.surecModel['isEmriId'] = this.surec.isEmriId;
        this.surecModel['operatorIsEmri'] =this.surec.operatorIsEmri;
        console.log(this.surecModel)
        this.surecService.update(this.surecModel).subscribe(
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
}
