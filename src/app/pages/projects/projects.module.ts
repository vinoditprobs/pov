import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CccComponent } from './../../pages/projects/ccc/ccc.component';
import { EssenceComponent } from './../../pages/projects/essence/essence.component';
import { KaveriComponent } from './../../pages/projects/kaveri/kaveri.component';
import { ZoiComponent } from './../../pages/projects/zoi/zoi.component';
import { BaggitComponent } from './../../pages/projects/baggit/baggit.component';
import { EverEnviroComponent } from './../../pages/projects/ever-enviro/ever-enviro.component';
import { OzeeComponent } from './../../pages/projects/ozee/ozee.component';
import { One360Component } from './../../pages/projects/one-360/one-360.component';
import { NaharExcaliburComponent } from './../../pages/projects/nahar-excalibur/nahar-excalibur.component';
import { SharedModule } from "../../shared/shared.module";
import { WorkBannerComponent } from "../../components/work-banner/work-banner.component";
import { ChooseGreatnessComponent } from './choose-greatness/choose-greatness.component';
import { IPruAlternatesComponent } from './i-pru-alternates/i-pru-alternates.component';
import { WalkingIsASportComponent } from './walking-is-a-sport/walking-is-a-sport.component';
import { TrainStrongComponent } from './train-strong/train-strong.component';


const router: Routes = [
    {
        path:'choose-greatness',
        component:ChooseGreatnessComponent
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
      },
      {
        path:'nahar-excalibur',
        component:NaharExcaliburComponent
      },
      {
        path:'i-pru-alternates',
        component:IPruAlternatesComponent
      },
      {
        path:'train-strong',
        component:TrainStrongComponent
      },
      {
        path:'walking-is-a-sport',
        component:WalkingIsASportComponent
      }
]

@NgModule({
    declarations: [
        CccComponent,
        EssenceComponent,
        KaveriComponent,
        ZoiComponent,
        BaggitComponent,
        EverEnviroComponent,
        OzeeComponent,
        One360Component,
        NaharExcaliburComponent,
        WorkBannerComponent,
        ChooseGreatnessComponent,
        IPruAlternatesComponent,
        WalkingIsASportComponent,
        TrainStrongComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(router)
    ],
})

export class ProjectsModule {}