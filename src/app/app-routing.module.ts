import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';
import { EthosComponent } from './pages/ethos/ethos.component';

import { CccComponent } from './pages/work/ccc/ccc.component';
import { SkechersComponent } from './pages/work/skechers/skechers.component';
import { EssenceComponent } from './pages/work/essence/essence.component';
import { KaveriComponent } from './pages/work/kaveri/kaveri.component';
import { ZoiComponent } from './pages/work/zoi/zoi.component';
import { BaggitComponent } from './pages/work/baggit/baggit.component';
import { EverEnviroComponent } from './pages/work/ever-enviro/ever-enviro.component';
import { OzeeComponent } from './pages/work/ozee/ozee.component';
import { One360Component } from './pages/work/one-360/one-360.component'
import { Error404Component } from './pages/error-404/error-404.component'


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent},
  { path:'ethos', component:EthosComponent},
  { path:'work',
    children:[
      {
        path:'',
        component:WorkComponent
      },
      {
        path:'skechers',
        component:SkechersComponent
      },
      {
        path:'essence',
        component:EssenceComponent
      },
      {
        path:'kaveri',
        component:KaveriComponent
      },
      {
        path:'zoi',
        component:ZoiComponent
      },
      {
        path:'baggit',
        component:BaggitComponent
      },
      {
        path:'ever-enviro',
        component:EverEnviroComponent
      },
      {
        path:'ozee',
        component:OzeeComponent
      },
      {
        path:'360-one',
        component:One360Component
      },
      {
        path:'ccc',
        component:CccComponent
      }
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: "top",
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
