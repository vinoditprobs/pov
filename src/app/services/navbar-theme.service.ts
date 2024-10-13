import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  changeHeaderTheme(theme:string){
      const navBar = this.document.querySelector('.navigationBar')
      if(navBar){
        navBar.classList.remove('transToLight', 'dark', 'light', 'transToDark');
        navBar.classList.add(theme);
      }
      console.log('Theme', theme);
  }

}
