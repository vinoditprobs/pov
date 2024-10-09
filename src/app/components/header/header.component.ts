import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() navBarColor : string = 'transToLight'

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  fixedHeader:boolean = false
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if(window.pageYOffset > 50){
          this.fixedHeader = true
      }else{
         this.fixedHeader = false
      }
       
    }
  }

}
