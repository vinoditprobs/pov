import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef, Input } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-gallery-ticker',
  templateUrl: './gallery-ticker.component.html',
  styleUrl: './gallery-ticker.component.scss'
})
export class GalleryTickerComponent {
  @Input() gallery: any = []

  private swiper: Swiper | undefined;

  

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }


  

    private initSwiper() {

      if (isPlatformBrowser(this.platformId)) {
  
        this.swiper = new Swiper(".galleryTiker", {
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
