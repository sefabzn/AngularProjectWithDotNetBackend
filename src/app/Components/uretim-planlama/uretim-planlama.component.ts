import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Makine } from 'src/app/Models/makine';
import { MakineService } from 'src/app/Services/makine.service';
@Component({
  selector: 'app-uretim-planlama',
  templateUrl: './uretim-planlama.component.html',
  styleUrls: ['./uretim-planlama.component.css']
})
export class UretimPlanlamaComponent implements OnInit {
  selectedMakine:Makine
  uretimPlanlamaForm:FormGroup
  makineler:Makine[]
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private makineService:MakineService) { }
  ngOnInit(): void {
    this.getMakineler();
  }

  createKabloUretimAddForm(){
    this.uretimPlanlamaForm=this.formBuilder.group({
      kablo:["",Validators.required],
      kesit:["",Validators.required]
    })
  }
  
  getMakineler(){
    this.makineService.getMakinas().subscribe(response=>{
      this.makineler=response.data
    })
  }
  add(){

  }
}
