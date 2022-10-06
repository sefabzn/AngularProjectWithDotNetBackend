import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { NaviComponent } from './Components/navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {NgxPaginationModule} from 'ngx-pagination'

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { CctvGenelDizaynComponent } from './Components/CCTV/cctv-genel-dizayn/cctv-genel-dizayn.component';
import { CctvDamarDizaynComponent } from './Components/CCTV/cctv-damar-dizayn/cctv-damar-dizayn.component';
import { CctvIsEmirleriComponent } from './Components/CCTV/cctv-is-emirleri/cctv-is-emirleri.component';
import { CctvSecmeComponent } from './Components/CCTV/cctv-secme/cctv-secme.component';
import { DizaynSecmeMenuComponent } from './Components/dizayn-secme-menu/dizayn-secme-menu.component';
import { CctvGenelAddComponent } from './Components/CCTV/cctv-genel-add/cctv-genel-add.component';
import { GrafikMenusuComponent } from './Components/Grafikler/grafik-menusu/grafik-menusu.component';
import { UretimGrafikComponent } from './Components/Grafikler/uretim-grafik/uretim-grafik.component';
import { ExtruderTeknikKayipGrafikComponent } from './Components/Grafikler/extruder-teknik-kayip-grafik/extruder-teknik-kayip-grafik.component';
import { SarfiyatGrafikComponent } from './Components/Grafikler/sarfiyat-grafik/sarfiyat-grafik.component';
import { SabitVerilerMenuComponent } from './Components/Sabit Veriler/sabit-veriler-menu/sabit-veriler-menu.component';
import { GunlukRaporComponent } from './Components/makineGunlukRapor/gunluk-rapor/gunluk-rapor.component';
import { KabloIsmiFilterPipe } from './pipes/kablo-ismi-filter.pipe';
import { OperatorIsEmriComponent } from './Components/operator-is-emri/operator-is-emri.component';
import { OperatorFilterPipe } from './pipes/operator-filter.pipe';
import { MakinelerComponent } from './Components/Sabit Veriler/makineler/makineler.component';
import { KesitYapisiComponent } from './Components/Sabit Veriler/kesit-yapisi/kesit-yapisi.component';
import { SarfiyatComponent } from './Components/sarfiyat/sarfiyat.component';
import { UretimPlanlamaComponent } from './Components/uretim-planlama/uretim-planlama.component';
import { OperatorIsEmriAddComponent } from './Components/operator-is-emri-add/operator-is-emri-add.component';
import { TelefonSecmeComponent } from './Components/Telefon/telefon-secme/telefon-secme.component';
import { TelefonIsEmirleriComponent } from './Components/Telefon/telefon-is-emirleri/telefon-is-emirleri.component';
import { TelefonGenelDizaynComponent } from './Components/Telefon/telefon-genel-dizayn/telefon-genel-dizayn.component';
import { TelefonGenelAddComponent } from './Components/Telefon/telefon-genel-add/telefon-genel-add.component';
import { TelefonDamarDizaynComponent } from './Components/Telefon/telefon-damar-dizayn/telefon-damar-dizayn.component';
import { YanginDamarDizaynComponent } from './Components/Yangin/yangin-damar-dizayn/yangin-damar-dizayn.component';
import { YanginGenelAddComponent } from './Components/Yangin/yangin-genel-add/yangin-genel-add.component';
import { YanginGenelDizaynComponent } from './Components/Yangin/yangin-genel-dizayn/yangin-genel-dizayn.component';
import { YanginIsEmirleriComponent } from './Components/Yangin/yangin-is-emirleri/yangin-is-emirleri.component';
import { YanginSecmeComponent } from './Components/Yangin/yangin-secme/yangin-secme.component';
import { MakineFilterPipe } from './pipes/makine-filter.pipe';
import { BeginningPageComponent } from './Components/beginning-page/beginning-page.component';
import { CctvDamarDizaynAddComponent } from './Components/CCTV/cctv-damar-dizayn-add/cctv-damar-dizayn-add.component';

@NgModule({
  declarations: [
    AppComponent,
    KullaniciComponent,
    NaviComponent,
    FilterPipePipe,
    CartSummaryComponent,
    LoginComponent,
    KabloUretimComponent,
    KabloUretimAddComponent,
    AnaMenuComponent,
    CctvGenelDizaynComponent,
    CctvDamarDizaynComponent,
    CctvIsEmirleriComponent,
    CctvSecmeComponent,
    DizaynSecmeMenuComponent,
    CctvGenelAddComponent,
    GrafikMenusuComponent,
    UretimGrafikComponent,
    ExtruderTeknikKayipGrafikComponent,
    SarfiyatGrafikComponent,
    SabitVerilerMenuComponent,
    GunlukRaporComponent,
    KabloIsmiFilterPipe,
    OperatorIsEmriComponent,
    OperatorFilterPipe,
    MakinelerComponent,
    KesitYapisiComponent,
    SarfiyatComponent,
    UretimPlanlamaComponent,
    OperatorIsEmriAddComponent,
    TelefonSecmeComponent,
    TelefonIsEmirleriComponent,
    TelefonGenelDizaynComponent,
    TelefonGenelAddComponent,
    TelefonDamarDizaynComponent,
    YanginDamarDizaynComponent,
    YanginGenelAddComponent,
    YanginGenelDizaynComponent,
    YanginIsEmirleriComponent,
    YanginSecmeComponent,
    MakineFilterPipe,
    BeginningPageComponent,
    CctvDamarDizaynAddComponent,
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
    NgxPaginationModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
