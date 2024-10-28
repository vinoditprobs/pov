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


      // const parallaxKeywordSection = this.document.querySelectorAll('.parallaxKeywordSection .parallaxKeyword')
      // parallaxKeywordSection.forEach((item) => {
      //   const topTitle = item.querySelector('.parallax_title .title');
      //   const bottomTitle = item.querySelector('.parallax_bottom_title .title');
      //   const bg = item.querySelector('.bg')

      //   new ScrollMagic.Scene({
      //     triggerElement: item,
      //     triggerHook: 0,
      //     duration: "100%"
      //   })
      //   .setPin(bg, {pushFollowers: false })
      //   .addTo(controller);

      //   new ScrollMagic.Scene({
      //     triggerElement: topTitle,
      //     triggerHook: 0.5,
      //     duration: "50%"
      //   })
      //   .setTween(topTitle, { fontSize:'calc(1.625rem + 4.5vw)', fontWeight:700, ease:'power2.out' })
      //   .addTo(controller);

      //   new ScrollMagic.Scene({
      //     triggerElement: topTitle,
      //     triggerHook: 0.15,
      //     duration: "50%"
      //   })
      //   .setPin(topTitle)
      //   .addTo(controller);

      //   new ScrollMagic.Scene({
      //     triggerElement: bottomTitle,
      //     triggerHook: 0.5,
      //     duration: "50%"
      //   })
      //   .setTween(bottomTitle, { fontSize:'calc(1.625rem + 4.5vw)', fontWeight:700, ease:'power2.out' })
      //   .addTo(controller);
      // })


      const keyFeaturesSection = this.document.querySelectorAll('.keyFeaturesSection');
     
      keyFeaturesSection.forEach((featuresSection) => {
        const featureBg = featuresSection.querySelector('.featureBg');
        new ScrollMagic.Scene({
          triggerElement: featuresSection,
          triggerHook: 0.12,
          duration: "210%"
        })
        .setPin(featureBg, {pushFollowers: false })
        .addTo(controller);
      })

      const leftKeyFeatures = this.document.querySelectorAll('.leftKey .feature')
      leftKeyFeatures.forEach(leftFeature => {
        new ScrollMagic.Scene({
          triggerElement: leftFeature,
          triggerHook: 0.55,
          duration: "40%"
        })
        .setTween(leftFeature, { scale: '1', ease:'power2.out' })
        .addTo(controller);
      })

      const rightKeyFeatures = this.document.querySelectorAll('.rightKey .feature')
      rightKeyFeatures.forEach(rightFeature => {
        new ScrollMagic.Scene({
          triggerElement: rightFeature,
          triggerHook: 0.95,
          duration: "55%"
        })
        .setTween(rightFeature, { scale: '1', ease:'power2.out' })
        .addTo(controller);
      })
      

        


      const revealElements = this.document.querySelectorAll(
        ".colUpAnim, .colDownAnim, .colLeftAnim, .colRightAnim, .customAnim"
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
    
 
      const headline = this.document.querySelector('.headline');
      //let shesKeys = gsap.to(".shes_keys", 1, {className: "shes_keys"});
      if(headline){
        new ScrollMagic.Scene({
          triggerHook: 0,
          duration: "20%"
        })
        .setTween(headline, { y: '20%', autoAlpha: 0, })
        //.addIndicators()
        .addTo(controller);
      }


      const brandSeek = this.document.querySelector('.brandSeek');
      //let shesKeys = gsap.to(".shes_keys", 1, {className: "shes_keys"});
      if(brandSeek){
        new ScrollMagic.Scene({
          triggerElement: brandSeek,
          triggerHook: 0.5,
          duration: '50%'
        })
        .setTween(brandSeek, { y:'20%', ease:'power2.out' })
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



      // const parallaxBg = this.document.querySelectorAll('.parallax');
      // parallaxBg.forEach((element, index) => {
      //   const scene0 = new ScrollMagic.Scene({
      //     triggerElement: element,
      //     triggerHook: 1,
      //     duration: '100%'
      //   })
      //   .setTween(element.querySelector('.parallax_bg .video_player video'), {y: "100%",  ease:'liner' })
      //   //.addIndicators({ name: `Parallax ${index + 1}` })
      //   .addTo(controller);
      // });
      

      // parallaxBg.forEach((element, index) => {
      // new ScrollMagic.Scene({
      //     triggerElement: element, 
      //     triggerHook: 0.12,
      //     duration: '85%'
      //   })
      //   .setPin(element.querySelector('.parallax_title .title'))
      //   //.addIndicators({ name: `Parallax ${index + 1}` })
      //   .addTo(controller);
      // });

      // parallaxBg.forEach((element, index) => {
      //   const scene = new ScrollMagic.Scene({
      //     triggerElement: element, 
      //     triggerHook: 0.25,
      //     duration: '25%'
      //   })
      //   .setTween(element.querySelector('.parallax_title .title'), { scale: '1',  ease:'power2.out' })
      //   //.addIndicators({ name: `Parallax ${index + 1}` })
      //   .addTo(controller);
      // });


      // parallaxBg.forEach((element, index) => {
      //   const scene2 = new ScrollMagic.Scene({
      //     triggerElement: element.querySelector('.parallax_bottom_title .title'), 
      //     triggerHook: 0.5,
      //     duration: '25%'
      //   })
      //   .setTween(element.querySelector('.parallax_bottom_title .title'), { scale: '0' })
      //   //.addIndicators({ name: `Parallax ${index + 1}` })
      //   .addTo(controller);
      // });




      const povArtSection = this.document.querySelector('.povArtSection');
        if (povArtSection) {
            new ScrollMagic.Scene({
              triggerElement:povArtSection, 
              triggerHook:0,
              duration: '75%'
              // Adjust the duration as needed
            })
            //.setTween(povArtSection, { backgroundColor: 'red' }) 
            .setPin(povArtSection) // Add units to 'y'
            //.addIndicators({ name: `Parallax` })  // Uncomment for debugging if needed
            .addTo(controller);
        }

        const povArt = this.document.querySelector('.povArt');
        if (povArt) {
            new ScrollMagic.Scene({
              triggerElement:povArtSection, 
              triggerHook:0,
              duration: '100%'
            })
            .setTween(povArt, {  scale:1.2, opacity:1 })
            .addTo(controller);
        }

     

    

          
    }
  }


}
