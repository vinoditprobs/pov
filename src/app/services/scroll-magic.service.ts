import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, DOCUMENT } from "@angular/common";
import { gsap } from "gsap";

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
      //let shesKeys = gsap.to(".shes_keys", 1, {className: "shes_keys"});
      if(bannerBg){
        new ScrollMagic.Scene({
          triggerHook: 0,
          duration: "70%"
        })
        .setTween(bannerBg, { scale: '0.8' })
        //.addIndicators()
        .addTo(controller);
      }

    }
  }


}
