import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent {

  links: any
  
  posX: number = 0;
  posY: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  cursor!: HTMLElement;
  follower!: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(): void {
    this.cursor = this.document.querySelector('.cursor') as HTMLElement;
    this.follower = this.document.querySelector('.cursor-follower') as HTMLElement;

    // Start animation
    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
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
      }
    });

    const links = this.document.querySelectorAll('.link');
    links.forEach((link) => {
      link.addEventListener('mouseenter', ()  => {
        this.cursor.classList.add('active');
        this.follower.classList.add('active');
      })
      link.addEventListener('mouseleave', ()  => {
        this.cursor.classList.remove('active');
        this.follower.classList.remove('active');
      }) 
    })
    
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
  }


}
