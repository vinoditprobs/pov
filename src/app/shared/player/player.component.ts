import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

  @ViewChild('videoSection', { static: true }) videoSection!: ElementRef;
  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement | any>;

  @Input() videoSrc : string = ''
  @Input() posterSrc : string = ''
  @Input() autoPlay : boolean = false
  @Input() cta : boolean = true

  constructor(@Inject(DOCUMENT) private document: Document,  @Inject(PLATFORM_ID) private platformId: Object,){}

  playing: boolean = false
  muted: boolean = true

  ngOnInit(){}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.handleScroll();
  }

  handleScroll() {
    const videoSectionOffsets = this.videoSection.nativeElement.getBoundingClientRect();
    const windowHalfHeight = window.innerHeight / 2;

    if (videoSectionOffsets.top < windowHalfHeight && videoSectionOffsets.bottom > windowHalfHeight) {
      this.video.nativeElement.play();
      this.playing = true;
      this.muted = false
    } else {
      this.video.nativeElement.pause();
      this.playing = false;
      this.muted = false
    }
  }


  handlePlayPause() {
    if (this.playing) {
      this.playing = false;
      this.video.nativeElement.pause(); 
      this.muted = false
    } else {
      this.playing = true;
      this.video.nativeElement.play(); 
      this.muted = false
    }
  }

  handleMute() {
    const video = this.document.querySelector<HTMLVideoElement | any>('.video_player > video');
    video.muted = !video.muted; // Toggle the mute state of the video
    this.muted = !this.muted;
  }


}
