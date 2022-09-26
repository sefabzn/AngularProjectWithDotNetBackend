import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenModel } from 'src/app/Models/tokenModel';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      KullaniciAdi:["",Validators.required],
      Sifre:["",Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.expiration)
        localStorage.setItem("token",response.token)
        localStorage.setItem("user",response.userName)
        return "anamenu"
      },responseError=>{
        this.toastrService.warning(responseError.error)
        
      })
      return "s"
    }
    return "c"
  }

}
