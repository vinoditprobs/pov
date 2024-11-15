import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef, Input, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-gallery-ticker',
  templateUrl: './gallery-ticker.component.html',
  styleUrls: ['./gallery-ticker.component.scss']
})
export class GalleryTickerComponent implements AfterViewInit {
  @Input() gallery: any = []
  @Input() tickerType: string = 'client'
  @Input() reverseDirection: boolean = false
  @Input() invert:boolean = false

  public swiperId: string = `swiper-${Math.random().toString(36).substring(2, 15)}`; // Unique ID
  private swiper: Swiper | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }

  private initSwiper() {
    if (isPlatformBrowser(this.platformId)) {

      this.swiper = new Swiper(`#${this.swiperId}`, {  // Use unique ID selector
        slidesPerView: 1.2,
        spaceBetween: 24,
        freeMode: false,
        watchSlidesProgress: false,
        navigation: false,
        pagination: false,
        allowTouchMove: false,
        speed: 5000,
        autoplay: {
          delay: 0,
          pauseOnMouseEnter: true,
          reverseDirection: this.reverseDirection
        },
        breakpoints: {
          640: {
            slidesPerView: 1.2
          },
          768: {
            slidesPerView: 2.2
          },
          1024: {
            slidesPerView: 4.5
          },
        },
        loop: true,
      });
    }
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }
}
