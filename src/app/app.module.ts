import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { NaviComponent } from './Components/navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { DizaynSecmeMenuComponent } from './Components/dizayn-secme-menu/dizayn-secme-menu.component';
import { GrafikMenusuComponent } from './Components/Grafikler/grafik-menusu/grafik-menusu.component';
import { UretimGrafikComponent } from './Components/Grafikler/uretim-grafik/uretim-grafik.component';
import { ExtruderTeknikKayipGrafikComponent } from './Components/Grafikler/extruder-teknik-kayip-grafik/extruder-teknik-kayip-grafik.component';
import { SarfiyatGrafikComponent } from './Components/Grafikler/sarfiyat-grafik/sarfiyat-grafik.component';
import { SabitVerilerMenuComponent } from './Components/Sabit Veriler/sabit-veriler-menu/sabit-veriler-menu.component';
import { GunlukRaporComponent } from './Components/makineGunlukRapor/gunluk-rapor/gunluk-rapor.component';
import { KabloIsmiFilterPipe } from './pipes/kablo-ismi-filter.pipe';
import { OperatorFilterPipe } from './pipes/operator-filter.pipe';
import { MakinelerComponent } from './Components/Sabit Veriler/makineler/makineler.component';
import { KesitYapisiComponent } from './Components/Sabit Veriler/kesit-yapisi/kesit-yapisi.component';
import { SarfiyatComponent } from './Components/sarfiyat/sarfiyat.component';
import { UretimPlanlamaComponent } from './Components/uretim-planlama/uretim-planlama.component';
import { MakineFilterPipe } from './pipes/makine-filter.pipe';
import { BeginningPageComponent } from './Components/beginning-page/beginning-page.component';
import { KabloUretimUpdateComponent } from './Components/kablo-uretim/kablo-uretim-update/kablo-uretim-update.component';
import { IsEmriTakipComponent } from './Components/is-emri-takip/is-emri-takip.component';

import { SureclerComponent } from './Components/surecler/surecler.component';
import { SurecAddComponent } from './Components/Surecler-Add/surec-add/surec-add.component';
import { SurecUpdateComponent } from './Components/surec-update/surec-update.component';
import { RegisterComponent } from './Components/register/register.component';
import { IsEmriAddComponent } from './Components/is-emri-add/is-emri-add.component';
import { GenelDizaynListComponent } from './Components/genel-dizayn-list/genel-dizayn-list.component';
import { GenelDizaynAddComponent } from './Components/genel-dizayn-add/genel-dizayn-add.component';
import { GenelDizaynUpdateComponent } from './Components/genel-dizayn-update/genel-dizayn-update.component';

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
    DizaynSecmeMenuComponent,
    GrafikMenusuComponent,
    UretimGrafikComponent,
    ExtruderTeknikKayipGrafikComponent,
    SarfiyatGrafikComponent,
    SabitVerilerMenuComponent,
    GunlukRaporComponent,
    KabloIsmiFilterPipe,
    MakinelerComponent,
    KesitYapisiComponent,
    SarfiyatComponent,
    UretimPlanlamaComponent,
    MakineFilterPipe,
    BeginningPageComponent,
    KabloUretimUpdateComponent,
    IsEmriTakipComponent,
    SureclerComponent,
    SurecAddComponent,
    SurecUpdateComponent,
    RegisterComponent,
    IsEmriAddComponent,
    GenelDizaynListComponent,
    GenelDizaynAddComponent,
    GenelDizaynUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
