import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, DOCUMENT } from "@angular/common";

declare const ScrollMagic: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollMagicService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {}

  initScrollMagic() {
    if (isPlatformBrowser(this.platformId)) {
      const controller = new ScrollMagic.Controller();

      const shesKeys = this.document.querySelector('.shes_keys');
      if(shesKeys){
        new ScrollMagic.Scene({
          triggerHook: 0,
          duration: "50%"
        })
          .setTween(shesKeys, { y: 0 })
          .addIndicators()
          .addTo(controller);
      }
    }
  }


}
