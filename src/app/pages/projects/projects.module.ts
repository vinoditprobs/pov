import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CccComponent } from './../../pages/projects/ccc/ccc.component';
import { SkechersComponent } from './../../pages/projects/skechers/skechers.component';
import { EssenceComponent } from './../../pages/projects/essence/essence.component';
import { KaveriComponent } from './../../pages/projects/kaveri/kaveri.component';
import { ZoiComponent } from './../../pages/projects/zoi/zoi.component';
import { BaggitComponent } from './../../pages/projects/baggit/baggit.component';
import { EverEnviroComponent } from './../../pages/projects/ever-enviro/ever-enviro.component';
import { OzeeComponent } from './../../pages/projects/ozee/ozee.component';
import { One360Component } from './../../pages/projects/one-360/one-360.component';
import { NaharExcaliburComponent } from './../../pages/projects/nahar-excalibur/nahar-excalibur.component';
import { FullertonGrihashaktiComponent } from './../../pages/projects/fullerton-grihashakti/fullerton-grihashakti.component';
import { SharedModule } from "../../shared/shared.module";
import { WorkBannerComponent } from "../../components/work-banner/work-banner.component";


const router: Routes = [
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
      },
      {
        path:'nahar-excalibur',
        component:NaharExcaliburComponent
      },
      {
        path:'fullerton-grihashakti',
        component:FullertonGrihashaktiComponent
      }
]

@NgModule({
    declarations: [
        CccComponent,
        SkechersComponent,
        EssenceComponent,
        KaveriComponent,
        ZoiComponent,
        BaggitComponent,
        EverEnviroComponent,
        OzeeComponent,
        One360Component,
        NaharExcaliburComponent,
        FullertonGrihashaktiComponent,
        WorkBannerComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(router)
    ],
})

export class ProjectsModule {}