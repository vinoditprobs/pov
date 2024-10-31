import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef, Input, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-project-result',
  templateUrl: './project-result.component.html',
  styleUrl: './project-result.component.scss'
})
export class ProjectResultComponent {
@Input() results: any = []

  public swiperId: string = `swiper-result-${Math.random().toString(36).substring(2, 15)}`; // Unique ID
  private swiper: Swiper | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }

  private initSwiper() {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper = new Swiper(`#${this.swiperId}`, {  // Use unique ID selector
        slidesPerView:'auto',
        spaceBetween: 0,
        rewind: true,
        freeMode: true,
        //loop: true,
        navigation: false,
        pagination: false,
        allowTouchMove: true,
        speed: 6000,
        mousewheel: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        }
      });
    }
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }
}
