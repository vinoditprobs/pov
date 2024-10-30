import { Component, HostListener, Inject, OnInit, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TweenMax } from 'gsap';
import { gsap } from "gsap";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent implements AfterViewInit {
  
  posX: number = 0;
  posY: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  cursor!: HTMLElement;
  follower!: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object){}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)){
    this.cursor = this.document.querySelector('.cursor') as HTMLElement;
    this.follower = this.document.querySelector('.cursor-follower') as HTMLElement;

    const animate = () => {
      this.posX += (this.mouseX - this.posX) / 9;
      this.posY += (this.mouseY - this.posY) / 9;
    
      TweenMax.set(this.follower, {
        css: {
          left: this.posX - 12,
          top: this.posY - 12
        }
      });
      TweenMax.set(this.cursor, {
        css: {
          left: this.mouseX,
          top: this.mouseY
        }
      });
    
      requestAnimationFrame(animate);
    };
    
    // Start the animation loop using requestAnimationFrame
        requestAnimationFrame(animate);
        
      const links = this.document.querySelectorAll('.link');
      //console.log('Links:', links); // Log the links to check if they exist

      if (links.length > 0) {
        // Use Array.from to ensure compatibility
        Array.from(links).forEach((link) => {
          link.addEventListener('mouseenter', () => {
            this.cursor.classList.add('active');
            this.follower.classList.add('active');
          });
          link.addEventListener('mouseleave', () => {
            this.cursor.classList.remove('active');
            this.follower.classList.remove('active');
          });
        });
      } else {
        //console.warn('No elements with the class "link" found.');
      }

      const starCursor = this.document.querySelectorAll('.starCursor');
      if (starCursor.length > 0) {
        Array.from(starCursor).forEach((star) => {
          star.addEventListener('mouseenter', () => {
            this.cursor.classList.add('star');
            this.follower.classList.add('star');
          });
          star.addEventListener('mouseleave', () => {
            this.cursor.classList.remove('star');
            this.follower.classList.remove('star');
          });
        });
      }
}

}


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
  }


}
