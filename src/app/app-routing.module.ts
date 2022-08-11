import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { CctvDamarDizaynComponent } from './Components/CCTV/cctv-damar-dizayn/cctv-damar-dizayn.component';
import { CctvGenelAddComponent } from './Components/CCTV/cctv-genel-add/cctv-genel-add.component';
import { CctvGenelDizaynComponent } from './Components/CCTV/cctv-genel-dizayn/cctv-genel-dizayn.component';
import { CctvIsEmirleriComponent } from './Components/CCTV/cctv-is-emirleri/cctv-is-emirleri.component';
import { CctvSecmeComponent } from './Components/CCTV/cctv-secme/cctv-secme.component';
import { DizaynSecmeMenuComponent } from './Components/dizayn-secme-menu/dizayn-secme-menu.component';
import { ExtruderTeknikKayipGrafikComponent } from './Components/Grafikler/extruder-teknik-kayip-grafik/extruder-teknik-kayip-grafik.component';
import { GrafikMenusuComponent } from './Components/Grafikler/grafik-menusu/grafik-menusu.component';
import { SarfiyatGrafikComponent } from './Components/Grafikler/sarfiyat-grafik/sarfiyat-grafik.component';
import { UretimGrafikComponent } from './Components/Grafikler/uretim-grafik/uretim-grafik.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { LoginComponent } from './Components/login/login.component';
import { GunlukRaporComponent } from './Components/makineGunlukRapor/gunluk-rapor/gunluk-rapor.component';
import { OperatorIsEmriComponent } from './Components/operator-is-emri/operator-is-emri.component';
import { KesitYapisiComponent } from './Components/Sabit Veriler/kesit-yapisi/kesit-yapisi.component';
import { MakinelerComponent } from './Components/Sabit Veriler/makineler/makineler.component';
import { SabitVerilerMenuComponent } from './Components/Sabit Veriler/sabit-veriler-menu/sabit-veriler-menu.component';
import { SarfiyatComponent } from './Components/sarfiyat/sarfiyat.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:AnaMenuComponent},
  {path:"kullanicilar/getByMakineId/:makineId",component:KullaniciComponent},
  {path:"kullanicilar",component:KullaniciComponent},
  {path:"login",component:LoginComponent},
  {path:"kablouretim",component:KabloUretimComponent},
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
  {path:"Sarfiyat",component:SarfiyatComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
