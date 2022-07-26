import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaMenuComponent } from './Components/ana-menu/ana-menu.component';
import { CctvDamarDizaynComponent } from './Components/CCTV/cctv-damar-dizayn/cctv-damar-dizayn.component';
import { CctvGenelDizaynComponent } from './Components/CCTV/cctv-genel-dizayn/cctv-genel-dizayn.component';
import { CctvSecmeComponent } from './Components/CCTV/cctv-secme/cctv-secme.component';
import { KabloUretimAddComponent } from './Components/kablo-uretim-add/kablo-uretim-add.component';
import { KabloUretimComponent } from './Components/kablo-uretim/kablo-uretim.component';
import { KullaniciComponent } from './Components/kullanici/kullanici.component';
import { LoginComponent } from './Components/login/login.component';
import { MakinaAddComponent } from './Components/makina-add/makina-add.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:AnaMenuComponent},
  {path:"kullanicilar/getByMakineId/:makineId",component:KullaniciComponent},
  {path:"kullanicilar",component:KullaniciComponent},
  {path:"makinalar/add",component:MakinaAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"kablouretim",component:KabloUretimComponent},
  {path:"kablouretim/add",component:KabloUretimAddComponent},
  {path:"anamenu",component:AnaMenuComponent},
  {path:"cctvsecme",component:CctvSecmeComponent},
  {path:"cctvgeneldizayn",component:CctvGenelDizaynComponent},
  {path:"cctvdamardizayn/getByCctvGenelDizaynId/:cctvGenelDizaynId",component:CctvDamarDizaynComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
