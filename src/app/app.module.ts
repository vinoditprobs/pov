import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
    ParallaxKeywordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
