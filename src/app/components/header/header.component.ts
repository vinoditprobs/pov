import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  menuStatus: boolean = false

  fixedHeader: boolean = false
  hasStickyClass: boolean = false

  constructor(@Inject(PLATFORM_ID) private platformId: Object,  @Inject(DOCUMENT) private document: Document, public _loader: LoaderService,  private NavbarThemeService: NavbarThemeService){}
  loadingElem: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const navbarBg = this.document.querySelector('.navigationBar > .bg') as HTMLDivElement | null;
      if (this.hasStickyClass) {
        const scrollPosition = window.pageYOffset;
        const opacityIncreaseFactor = 1 / 80; // Adjust this value to control the speed of opacity change
        let opacity = scrollPosition * opacityIncreaseFactor;
        opacity = Math.min(Math.max(opacity, 0), 1);
        if(navbarBg){
          navbarBg.style.opacity = opacity.toString();
        }
      }
    }
  }

  openMenu(){
    this.menuStatus = true;
    const body = this.document.querySelector('body')
    if(this.menuStatus){
      body?.classList.add('stopScroll');
    }else{
      body?.classList.remove('stopScroll');
    }
  }
  closeMenu(){
    this.menuStatus = false
    const body = this.document.querySelector('body')
    body?.classList.remove('stopScroll');
  }

  ngOnInit(): void {
    this._loader.loading$.subscribe((isLoading: boolean) => {
      this.loadingElem = isLoading;
    });
    this.NavbarThemeService.hasStickyClass$.subscribe((value) => {
      this.hasStickyClass = value;

      if(value){
        let navbarBg = this.document.querySelector('.navigationBar > .bg') as HTMLDivElement | null;
        if(navbarBg){
          navbarBg.style.opacity = '0';
        }
      }else{
        let navbarBg = this.document.querySelector('.navigationBar > .bg') as HTMLDivElement | null;
        if(navbarBg){
          navbarBg.style.opacity = '1';
        }
      }
    });
   }


}
