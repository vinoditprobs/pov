import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  private swiper: Swiper | undefined;

  

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }


    clients = [
      {
        img:'images/clients/skechers.png',
        title:'Skechers'
      },
      {
        img:'images/clients/zee-digital.png',
        title:'Zee Digital'
      },
      {
        img:'images/clients/nahar.png',
        title:'Nahar'
      },
      {
        img:'images/clients/kaveri.png',
        title:'Kaveri'
      },
      {
        img:'images/clients/icici.png',
        title:'ICICI Prudential'
      },
      {
        img:'images/clients/garden-vareli.png',
        title:'Garden Vareli'
      },
      {
        img:'images/clients/essence.png',
        title:'Essence'
      },
      {
        img:'images/clients/baggit.png',
        title:'Baggit'
      },
      {
        img:'images/clients/aditya-birla-group.png',
        title:'Aditya Birla Group'
      },
      {
        img:'images/clients/360-one.png',
        title:'360 One'
      },
      {
        img:'images/clients/shemaroo.png',
        title:'Shemaroo'
      },
      {
        img:'images/clients/aditya-birla-group.png',
        title:'Mini Plex'
      },
    ]

    private initSwiper() {

      if (isPlatformBrowser(this.platformId)) {
  
        this.swiper = new Swiper(".clientele_slider", {
          slidesPerView: 3,
          spaceBetween: 10,
          freeMode: true,
          watchSlidesProgress: true,
          loop: true,
          navigation: false,
          pagination: false,
          allowTouchMove: true,
          speed: 3000,
          autoplay: {
            delay: 0,
            disableOnInteraction: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          },
        });

  
      }
    }

    ngOnInit():void{
      this.initSwiper();
    }

}
