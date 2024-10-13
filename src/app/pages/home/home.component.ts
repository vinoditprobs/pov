import { Component, Inject } from '@angular/core';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { DOCUMENT } from '@angular/common';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  navBarColor : string = 'transToLight'

  constructor(private ScrollMagicService: ScrollMagicService, private NavbarThemeService: NavbarThemeService){}

    ngOnInit(){
      this.ScrollMagicService.initScrollMagic();
      this.NavbarThemeService.changeHeaderTheme('transToLight')
    }
    slideAssets = [
      { 
        image: 'images/home/banner-1.jpg', 
        title: 'expertise',
      },
      { 
        image: 'images/home/banner-2.jpg', 
        title: 'expertise',
      },
      { 
        image: 'images/home/banner-3.jpg', 
        title: 'expertise',
      },
      { 
        image: 'images/home/banner-4.jpg', 
        title: 'expertise',
      },
      { 
        image: 'images/home/banner-5.jpg', 
        title: 'expertise',
      }
    ];
   





}
