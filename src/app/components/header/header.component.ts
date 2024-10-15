import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuStatus: boolean = false

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object,  @Inject(DOCUMENT) private document: Document, public _loader: LoaderService){
    
  }
  loadingElem: boolean = false;
  

  fixedHeader:boolean = false
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if(window.pageYOffset > 100){
          this.fixedHeader = true
      }else{
         this.fixedHeader = false
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
  
  //  this._loader.show();
    
   }

}
