import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, DOCUMENT } from "@angular/common";
import { gsap } from "gsap";
import { EasePack } from "gsap/all";

declare const ScrollMagic: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollMagicService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {}

  initScrollMagic() {
    if (isPlatformBrowser(this.platformId)){
      const controller = new ScrollMagic.Controller();

      const headline = this.document.querySelector('.headline');
      //let shesKeys = gsap.to(".shes_keys", 1, {className: "shes_keys"});
      if(headline){
        new ScrollMagic.Scene({
          triggerHook: 0,
          duration: "30%"
        })
        .setTween(headline, { y: '30%', scale: '1.2', autoAlpha: 0, })
        //.addIndicators()
        .addTo(controller);
      }

      const bannerBg = this.document.querySelector('.bannerBg');
      if(bannerBg){
        new ScrollMagic.Scene({
          triggerHook: 0,
          duration: "70%"
        })
        .setTween(bannerBg, { scale: '0.8' })
        //.addIndicators()
        .addTo(controller);
      }



      const parallaxBg = this.document.querySelectorAll('.parallax');

      
      parallaxBg.forEach((element, index) => {
        const scene0 = new ScrollMagic.Scene({
          triggerElement: element,
          triggerHook: 1,
          duration: '100%'
        })
        .setTween(element.querySelector('.parallax_bg .video_player video'), {y: "100%",  ease:'liner' })
        //.addIndicators({ name: `Parallax ${index + 1}` })
        .addTo(controller);
      });
      

      parallaxBg.forEach((element, index) => {
        const scene = new ScrollMagic.Scene({
          triggerElement: element, 
          triggerHook: 0.12,
          duration: '85%'
        })
        .setPin(element.querySelector('.parallax_title .title'))
        //.addIndicators({ name: `Parallax ${index + 1}` })
        .addTo(controller);
      });

      parallaxBg.forEach((element, index) => {
        const scene = new ScrollMagic.Scene({
          triggerElement: element, 
          triggerHook: 0.25,
          duration: '25%'
        })
        .setTween(element.querySelector('.parallax_title .title'), { scale: '1',  ease:'power2.out' })
        //.addIndicators({ name: `Parallax ${index + 1}` })
        .addTo(controller);
      });


      parallaxBg.forEach((element, index) => {
        const scene2 = new ScrollMagic.Scene({
          triggerElement: element.querySelector('.parallax_bottom_title .title'), 
          triggerHook: 0.7,
          duration: '25%'
        })
        .setTween(element.querySelector('.parallax_bottom_title .title'), { scale: '0' })
        //.addIndicators({ name: `Parallax ${index + 1}` })
        .addTo(controller);
      });
          
    }
  }


}
