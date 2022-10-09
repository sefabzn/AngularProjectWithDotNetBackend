import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { BeginningPageComponent } from './Components/beginning-page/beginning-page.component';
import { CctvDamarDizaynComponent } from './Components/CCTV/cctv-damar-dizayn/cctv-damar-dizayn.component';
import { CctvGenelAddComponent } from './Components/CCTV/cctv-genel-add/cctv-genel-add.component';
import { CctvGenelDizaynUpdateComponent } from './Components/CCTV/cctv-genel-dizayn-update/cctv-genel-dizayn-update.component';
import { CctvGenelDizaynComponent } from './Components/CCTV/cctv-genel-dizayn/cctv-genel-dizayn.component';
import { CctvIsEmirleriComponent } from './Components/CCTV/cctv-is-emirleri/cctv-is-emirleri.component';
import { CctvSecmeComponent } from './Components/CCTV/cctv-secme/cctv-secme.component';
import { DizaynSecmeMenuComponent } from './Components/dizayn-secme-menu/dizayn-secme-menu.component';
import { ExtruderTeknikKayipGrafikComponent } from './Components/Grafikler/extruder-teknik-kayip-grafik/extruder-teknik-kayip-grafik.component';
import { GrafikMenusuComponent } from './Components/Grafikler/grafik-menusu/grafik-menusu.component';
import { SarfiyatGrafikComponent } from './Components/Grafikler/sarfiyat-grafik/sarfiyat-grafik.component';
import { UretimGrafikComponent } from './Components/Grafikler/uretim-grafik/uretim-grafik.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { KabloUretimUpdateComponent } from './Components/kablo-uretim/kablo-uretim-update/kablo-uretim-update.component';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { LoginComponent } from './Components/login/login.component';
import { GunlukRaporComponent } from './Components/makineGunlukRapor/gunluk-rapor/gunluk-rapor.component';
import { OperatorIsEmriAddComponent } from './Components/operator-is-emri-add/operator-is-emri-add.component';
import { OperatorIsEmriUpdateComponent } from './Components/operator-is-emri-update/operator-is-emri-update.component';
import { OperatorIsEmriComponent } from './Components/operator-is-emri/operator-is-emri.component';
import { KesitYapisiComponent } from './Components/Sabit Veriler/kesit-yapisi/kesit-yapisi.component';
import { MakinelerComponent } from './Components/Sabit Veriler/makineler/makineler.component';
import { SabitVerilerMenuComponent } from './Components/Sabit Veriler/sabit-veriler-menu/sabit-veriler-menu.component';
import { SarfiyatComponent } from './Components/sarfiyat/sarfiyat.component';
import { TelefonDamarDizaynComponent } from './Components/Telefon/telefon-damar-dizayn/telefon-damar-dizayn.component';
import { TelefonGenelAddComponent } from './Components/Telefon/telefon-genel-add/telefon-genel-add.component';
import { TelefonGenelDizaynUpdateComponent } from './Components/Telefon/telefon-genel-dizayn-update/telefon-genel-dizayn-update.component';
import { TelefonGenelDizaynComponent } from './Components/Telefon/telefon-genel-dizayn/telefon-genel-dizayn.component';
import { TelefonIsEmirleriComponent } from './Components/Telefon/telefon-is-emirleri/telefon-is-emirleri.component';
import { TelefonSecmeComponent } from './Components/Telefon/telefon-secme/telefon-secme.component';
import { UretimPlanlamaComponent } from './Components/uretim-planlama/uretim-planlama.component';
import { YanginDamarDizaynComponent } from './Components/Yangin/yangin-damar-dizayn/yangin-damar-dizayn.component';
import { YanginGenelAddComponent } from './Components/Yangin/yangin-genel-add/yangin-genel-add.component';
import { YanginGenelDizaynUpdateComponent } from './Components/Yangin/yangin-genel-dizayn-update/yangin-genel-dizayn-update.component';
import { YanginGenelDizaynComponent } from './Components/Yangin/yangin-genel-dizayn/yangin-genel-dizayn.component';
import { YanginIsEmirleriComponent } from './Components/Yangin/yangin-is-emirleri/yangin-is-emirleri.component';
import { YanginSecmeComponent } from './Components/Yangin/yangin-secme/yangin-secme.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"Login",pathMatch:"full",component:LoginComponent},
  {path:"kullanicilar/getByMakineId/:makineId",component:KullaniciComponent},
  {path:"kullanicilar",component:KullaniciComponent},
  {path:"kablouretim",component:KabloUretimComponent, canActivate:[LoginGuard]},
  {path:"kablouretim/add",component:KabloUretimAddComponent},
  {path:"anamenu",component:AnaMenuComponent},
  {path:"cctvsecme",component:CctvSecmeComponent},
  {path:"cctvgeneldizayn",component:CctvGenelDizaynComponent},
  {path:"cctvdamardizayn/getByCctvGenelDizaynId/:cctvGenelDizaynId",component:CctvDamarDizaynComponent},
  {path:"DizaynSecmeMenu",component:DizaynSecmeMenuComponent},
  {path:"CctvIsEmirleri",component:CctvIsEmirleriComponent},
  {path:"CctvGenelDizayn/Add",component:CctvGenelAddComponent},
  {path:"GrafikMenu",component:GrafikMenusuComponent},
  {path:"GrafikMenu/UretimGrafik",component:UretimGrafikComponent},
  {path:"GrafikMenu/SarfiyatGrafik",component:SarfiyatGrafikComponent},
  {path:"GrafikMenu/ExtruderTeknikKayipGrafik",component:ExtruderTeknikKayipGrafikComponent},
  {path:"SabitVerilerMenu",component:SabitVerilerMenuComponent},
  {path:"SabitVerilerMenu/Makineler",component:MakinelerComponent},
  {path:"SabitVerilerMenu/DataList",component:KesitYapisiComponent},
  {path:"MakineGunlukRapor",component:GunlukRaporComponent},
  {path:"OperatorIsEmirleri",component:OperatorIsEmriComponent},
  {path:"OperatorIsEmri/Add",component:OperatorIsEmriAddComponent},
  {path:"OperatorIsEmri/Update/:isEmriId",component:OperatorIsEmriUpdateComponent},

  {path:"Sarfiyat",component:SarfiyatComponent},
  {path:"UretimPlanlama",component:UretimPlanlamaComponent,},
  {path:"telefonsecme",component:TelefonSecmeComponent},
  {path:"telefongeneldizayn",component:TelefonGenelDizaynComponent},
  {path:"telefondamardizayn/getByTelefonGenelDizaynId/:telefonGenelDizaynId",component:TelefonDamarDizaynComponent},
  {path:"TelefonIsEmirleri",component:TelefonIsEmirleriComponent},
  {path:"TelefonGenelDizayn/Add",component:TelefonGenelAddComponent},
  {path:"yanginsecme",component:YanginSecmeComponent},
  {path:"yangingeneldizayn",component:YanginGenelDizaynComponent},
  {path:"yangindamardizayn/getByYanginGenelDizaynId/:yanginGenelDizaynId",component:YanginDamarDizaynComponent},
  {path:"YanginIsEmirleri",component:YanginIsEmirleriComponent},
  {path:"YanginGenelDizayn/Add",component:YanginGenelAddComponent},
  {path:"",pathMatch:'full',component:BeginningPageComponent},
  {path:"kablouretim/update/:kabloId",component:KabloUretimUpdateComponent},
  {path:"CctvGenelDizayn/update/:kabloId",component:CctvGenelDizaynUpdateComponent},
  {path:"TelefonGenelDizayn/update/:kabloId",component:TelefonGenelDizaynUpdateComponent},
  {path:"YanginGenelDizayn/update/:kabloId",component:YanginGenelDizaynUpdateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
