import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';
import { EthosComponent } from './pages/ethos/ethos.component';

import { CccComponent } from './pages/projects/ccc/ccc.component';
import { SkechersComponent } from './pages/projects/skechers/skechers.component';
import { EssenceComponent } from './pages/projects/essence/essence.component';
import { KaveriComponent } from './pages/projects/kaveri/kaveri.component';
import { ZoiComponent } from './pages/projects/zoi/zoi.component';
import { BaggitComponent } from './pages/projects/baggit/baggit.component';
import { EverEnviroComponent } from './pages/projects/ever-enviro/ever-enviro.component';
import { OzeeComponent } from './pages/projects/ozee/ozee.component';
import { One360Component } from './pages/projects/one-360/one-360.component'
import { NaharExcaliburComponent } from './pages/projects/nahar-excalibur/nahar-excalibur.component';
import { FullertonGrihashaktiComponent } from './pages/projects/fullerton-grihashakti/fullerton-grihashakti.component'

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
        path:'',
        loadChildren:() => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
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
