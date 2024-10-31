import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
register();

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';
import { EthosComponent } from './pages/ethos/ethos.component';
import { SlideShowComponent } from './shared/slide-show/slide-show.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PlayerComponent } from './shared/player/player.component';
import { GalleryTickerComponent } from './shared/gallery-ticker/gallery-ticker.component';
import { ParallaxKeywordComponent } from './components/parallax-keyword/parallax-keyword.component';
import { InteractiveCursorSectionComponent } from './components/interactive-cursor-section/interactive-cursor-section.component';
import { CursorComponent } from './shared/cursor/cursor.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { CccComponent } from './pages/projects/ccc/ccc.component';
import { SkechersComponent } from './pages/projects/skechers/skechers.component';
import { EssenceComponent } from './pages/projects/essence/essence.component';
import { KaveriComponent } from './pages/projects/kaveri/kaveri.component';
import { ZoiComponent } from './pages/projects/zoi/zoi.component';
import { BaggitComponent } from './pages/projects/baggit/baggit.component';
import { EverEnviroComponent } from './pages/projects/ever-enviro/ever-enviro.component';
import { OzeeComponent } from './pages/projects/ozee/ozee.component';
import { One360Component } from './pages/projects/one-360/one-360.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { NaharExcaliburComponent } from './pages/projects/nahar-excalibur/nahar-excalibur.component';
import { FullertonGrihashaktiComponent } from './pages/projects/fullerton-grihashakti/fullerton-grihashakti.component';
import { SuggestProjectsComponent } from './components/suggest-projects/suggest-projects.component'
//import { gsap } from "gsap";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    EthosComponent,
    SlideShowComponent,
    ClientsComponent,
    PlayerComponent,
    GalleryTickerComponent,
    ParallaxKeywordComponent,
    InteractiveCursorSectionComponent,
    CursorComponent,
    KeyFeaturesComponent,
    CccComponent,
    SkechersComponent,
    EssenceComponent,
    KaveriComponent,
    ZoiComponent,
    BaggitComponent,
    EverEnviroComponent,
    OzeeComponent,
    One360Component,
    Error404Component,
    NaharExcaliburComponent,
    FullertonGrihashaktiComponent,
    SuggestProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AnimateOnScrollModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
