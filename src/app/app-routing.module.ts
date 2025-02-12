import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { BeginningPageComponent } from './Components/beginning-page/beginning-page.component';
import { ExtruderTeknikKayipGrafikComponent } from './Components/Grafikler/extruder-teknik-kayip-grafik/extruder-teknik-kayip-grafik.component';
import { GrafikMenusuComponent } from './Components/Grafikler/grafik-menusu/grafik-menusu.component';
import { SarfiyatGrafikComponent } from './Components/Grafikler/sarfiyat-grafik/sarfiyat-grafik.component';
import { UretimGrafikComponent } from './Components/Grafikler/uretim-grafik/uretim-grafik.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { KabloUretimUpdateComponent } from './Components/kablo-uretim/kablo-uretim-update/kablo-uretim-update.component';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { GunlukRaporComponent } from './Components/makineGunlukRapor/gunluk-rapor/gunluk-rapor.component';
import { KesitYapisiComponent } from './Components/Sabit Veriler/kesit-yapisi/kesit-yapisi.component';
import { MakinelerComponent } from './Components/Sabit Veriler/makineler/makineler.component';
import { SabitVerilerMenuComponent } from './Components/Sabit Veriler/sabit-veriler-menu/sabit-veriler-menu.component';
import { SarfiyatComponent } from './Components/sarfiyat/sarfiyat.component';
import { UretimPlanlamaComponent } from './Components/uretim-planlama/uretim-planlama.component';
import { LoginGuard } from './guards/login.guard';
import { IsEmriTakipComponent } from './Components/is-emri-takip/is-emri-takip.component';
import { SureclerComponent } from './Components/surecler/surecler.component';
import { SurecAddComponent } from './Components/Surecler-Add/surec-add/surec-add.component';
import { SurecUpdateComponent } from './Components/surec-update/surec-update.component';
import { IsEmriAddComponent } from './Components/is-emri-add/is-emri-add.component';
import { DizaynSecmeMenuComponent } from './Components/dizayn-secme-menu/dizayn-secme-menu.component';
import { GenelDizaynAddComponent } from './Components/genel-dizayn-add/genel-dizayn-add.component';
import { GenelDizaynListComponent } from './Components/genel-dizayn-list/genel-dizayn-list.component';
import { GenelDizaynUpdateComponent } from './Components/genel-dizayn-update/genel-dizayn-update.component';
import { SevkIrsaliyeListComponent } from './Components/sevk-irsaliye-list/sevk-irsaliye-list.component';
import { SevkIrsaliyeAddComponent } from './Components/sevk-irsaliye-add/sevk-irsaliye-add.component';
import { SevkIrsaliyeDetailComponent } from './Components/sevk-irsaliye-detail/sevk-irsaliye-detail.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:"kullanicilar/getByMakineId/:makineId",component:KullaniciComponent},
  {path:"kullanicilar",component:KullaniciComponent},
  {path:"kablouretim",component:KabloUretimComponent, canActivate:[LoginGuard]},
  {path:"kablouretim/add",component:KabloUretimAddComponent},
  { path: 'anamenu', component: AnaMenuComponent },
  {path:"GrafikMenu",component:GrafikMenusuComponent},
  {path:"GrafikMenu/UretimGrafik",component:UretimGrafikComponent},
  {path:"GrafikMenu/SarfiyatGrafik",component:SarfiyatGrafikComponent},
  {path:"GrafikMenu/ExtruderTeknikKayipGrafik",component:ExtruderTeknikKayipGrafikComponent},
  {path:"SabitVerilerMenu",component:SabitVerilerMenuComponent},
  {path:"SabitVerilerMenu/Makineler",component:MakinelerComponent},
  {path:"SabitVerilerMenu/DataList",component:KesitYapisiComponent},
  {path:"MakineGunlukRapor",component:GunlukRaporComponent},

  {path:"Sarfiyat",component:SarfiyatComponent},
  {path:"UretimPlanlama",component:UretimPlanlamaComponent,},
  {path:"",pathMatch:'full',component:BeginningPageComponent},
  {path:"kablouretim/update/:kabloId",component:KabloUretimUpdateComponent},
  {path:"IsEmriTakip",component:IsEmriTakipComponent},
  { path: 'is-emri-takip', component: IsEmriTakipComponent },
  { path: 'is-emri-add', component: IsEmriAddComponent },
  { path: '', redirectTo: '/is-emri-takip', pathMatch: 'full' },

  {path:"surecler/:isEmriId",component:SureclerComponent},
  {path:"surecler/Add/:isEmriId",component:SurecAddComponent},
  {path:"surecler/Update/:surecId",component:SurecUpdateComponent},

  {path:"DizaynSecmeMenu",component:DizaynSecmeMenuComponent},

  {path:"geneldizayn/list",component:GenelDizaynListComponent},
  {path:"geneldizayn/list/:tur", component: GenelDizaynListComponent},
  {path:"geneldizayn/add",component:GenelDizaynAddComponent},
  {path:"geneldizayn/update/:id",component:GenelDizaynUpdateComponent},
  { path: 'irsaliye', component: SevkIrsaliyeListComponent },
  { path: 'sevk-irsaliye/add', component: SevkIrsaliyeAddComponent },
  { path: 'sevk-irsaliye/detail/:id', component: SevkIrsaliyeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
