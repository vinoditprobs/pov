import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
import { ClientsComponent } from './components/clients/clients.component';
import { ParallaxKeywordComponent } from './components/parallax-keyword/parallax-keyword.component';
import { InteractiveCursorSectionComponent } from './components/interactive-cursor-section/interactive-cursor-section.component';
import { CursorComponent } from './shared/cursor/cursor.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { SharedModule } from './shared/shared.module';
import { Error404Component } from './pages/error-404/error-404.component';

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
    ClientsComponent,
    ParallaxKeywordComponent,
    InteractiveCursorSectionComponent,
    CursorComponent,
    KeyFeaturesComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
