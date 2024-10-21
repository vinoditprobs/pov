import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarThemeService {


  private stickyClassSubject = new BehaviorSubject<boolean>(false);
  hasStickyClass$ = this.stickyClassSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  hasStickyClass:boolean = false

  changeHeaderTheme(theme:string){
      const navBar = this.document.querySelector('.navigationBar')
      if(navBar){
        navBar.classList.remove('transToLight', 'dark', 'light', 'transToDark');
        navBar.classList.add(theme);
      }
      this.getHeaderInfo()
  }

  getHeaderInfo(){
    const navbar = this.document.querySelector('.navigationBar') as HTMLDivElement | null;
    const classesToCheck = ['transToLight', 'transToDark'];
    const hasStickyClass = classesToCheck.some(className => navbar?.classList.contains(className));  
   
    this.stickyClassSubject.next(hasStickyClass);
  }

}
