import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakinaComponent } from './Components/makina/makina.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { NaviComponent } from './Components/navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { MakinaAddComponent } from './Components/makina-add/makina-add.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { CctvGenelDizaynComponent } from './Components/CCTV/cctv-genel-dizayn/cctv-genel-dizayn.component';
import { CctvDamarDizaynComponent } from './Components/CCTV/cctv-damar-dizayn/cctv-damar-dizayn.component';
import { CctvIsEmirleriComponent } from './Components/CCTV/cctv-is-emirleri/cctv-is-emirleri.component';
import { CctvSecmeComponent } from './Components/CCTV/cctv-secme/cctv-secme.component';

@NgModule({
  declarations: [
    AppComponent,
    MakinaComponent,
    KullaniciComponent,
    NaviComponent,
    FilterPipePipe,
    CartSummaryComponent,
    MakinaAddComponent,
    LoginComponent,
    KabloUretimComponent,
    KabloUretimAddComponent,
    AnaMenuComponent,
    CctvGenelDizaynComponent,
    CctvDamarDizaynComponent,
    CctvIsEmirleriComponent,
    CctvSecmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
