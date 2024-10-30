import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TweenMax } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class CursorService {

  posX: number = 0;
  posY: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  cursor!: HTMLElement;
  follower!: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  initializeCursorAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
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

      requestAnimationFrame(animate);
      

      const links = this.document.querySelectorAll('.link');
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

      const starCursor = this.document.querySelectorAll('.starCursor');
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

  updateMousePosition(event: MouseEvent): void {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
  }
}
