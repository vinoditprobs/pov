import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, DOCUMENT } from "@angular/common";

declare const ScrollMagic: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollmagicService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {}

  initSM_ForHome() {
    if (isPlatformBrowser(this.platformId)) {
      const controller = new ScrollMagic.Controller();
      
      const revealElements = this.document.querySelectorAll(
        ".colUpAnim, .colDownAnim, .colLeftAnim, .colRightAnim, .box_card"
      );
      for (let i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: revealElements[i],
          offset: 50,
          triggerHook: 0.9,
        })
          .setClassToggle(revealElements[i], "visible")
          .addTo(controller);
      }
      
    }
  }

}
