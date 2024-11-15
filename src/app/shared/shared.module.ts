import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


import { SuggestProjectsComponent } from './../components/suggest-projects/suggest-projects.component'
import { PlayerComponent } from "./player/player.component";
import { GalleryTickerComponent } from "./gallery-ticker/gallery-ticker.component";
import { SlideShowComponent } from "./slide-show/slide-show.component";
import { ProjectResultComponent } from "../components/project-result/project-result.component";
import { UnderConstructionComponent } from "../components/under-construction/under-construction.component";

@NgModule({
    declarations: [
        SuggestProjectsComponent,
        PlayerComponent,
        GalleryTickerComponent,
        SlideShowComponent,
        ProjectResultComponent,
        UnderConstructionComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        AnimateOnScrollModule,
    ],
    exports: [
        SuggestProjectsComponent,
        PlayerComponent,
        AnimateOnScrollModule,
        GalleryTickerComponent,
        SlideShowComponent,
        ProjectResultComponent,
        UnderConstructionComponent
    ]
})

export class SharedModule{}