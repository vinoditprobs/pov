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


    private initSwiper() {

      if (isPlatformBrowser(this.platformId)) {
  
        this.swiper = new Swiper(".clientele_slider", {
          slidesPerView: 3,
          spaceBetween: 15,
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
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          },
        });

  
      }
    }

    ngOnInit():void{
      this.initSwiper();
    }

}
