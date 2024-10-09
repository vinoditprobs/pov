import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef, Input } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.scss'
})
export class SlideShowComponent {

  @Input() sliderSlides: any[] = [];
  @Input() sliderPagination: boolean = true;
  @Input() sliderNavigation: boolean = true;
  @Input() SliderZoomInOut: boolean = true
   
   private swiper: Swiper | undefined;
 
   constructor(
     @Inject(PLATFORM_ID) private platformId: Object,
     @Inject(DOCUMENT) private document: Document,) { }
 
 
 ngOnInit():void{
 
   if (isPlatformBrowser(this.platformId)) {
 
     this.swiper = new Swiper(".slideShow", {
       slidesPerView: 1,
       spaceBetween: 0,
       loop:true,
      //autoHeight: false,
       effect: "fade",
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       allowTouchMove: false,
       speed: 2000,
       
       autoplay: {
         delay: 5000,
         disableOnInteraction: true,
       }
       
     });
 
   }
 }
 
}
