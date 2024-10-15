import { Component, Inject, PLATFORM_ID, AfterViewInit, Input } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.scss'
})
export class SlideShowComponent implements AfterViewInit {

  @Input() sliderSlides: any[] = [];
  @Input() sliderPagination: boolean = true;
  @Input() sliderNavigation: boolean = true;
  @Input() animStyle: string = ''
  
   
   private swiper: Swiper | undefined;
 
   constructor(
     @Inject(PLATFORM_ID) private platformId: Object,
     @Inject(DOCUMENT) private document: Document,) { }
 

     private initSwiper() {
      if (isPlatformBrowser(this.platformId)) {
        this.swiper = new Swiper(".slideShow", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop:true,
          centeredSlides:true,
         //autoHeight: false,
          //effect: "fade",
         // direction:'vertical',
          navigation: false,
          pagination: false,
          allowTouchMove: false,
          speed: 2000,
          autoplay: {
            delay: 4000,
            disableOnInteraction: true,
          }
          
        });

  
      }
  }    
 
 ngAfterViewInit():void{
  this.initSwiper();
 }
 
}
