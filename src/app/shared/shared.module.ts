import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


import { SuggestProjectsComponent } from './../components/suggest-projects/suggest-projects.component'
import { PlayerComponent } from "./player/player.component";
import { GalleryTickerComponent } from "./gallery-ticker/gallery-ticker.component";
import { SlideShowComponent } from "./slide-show/slide-show.component";


@NgModule({
    declarations: [
        SuggestProjectsComponent,
        PlayerComponent,
        GalleryTickerComponent,
        SlideShowComponent,
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
    ]
})

export class SharedModule{}