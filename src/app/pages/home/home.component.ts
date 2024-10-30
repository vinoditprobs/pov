import { Component } from '@angular/core';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  navBarColor : string = 'transToLight'

  constructor(private ScrollMagicService: ScrollMagicService, private NavbarThemeService: NavbarThemeService, private CursorService: CursorService){
    
  }
    slideAssets = [
      { 
        id:1,
        image: 'images/home/banner-1.jpg',
        webp: 'images/home/banner-1.webp', 
        title: 'CREATIVITY FOR INFLUENCE',
      },
      { 
        id:2,
        image: 'images/home/banner-2.jpg', 
        webp: 'images/home/banner-2.webp', 
        title: 'CREATIVITY FOR INFLUENCE',
      },
      { 
        id:3,
        image: 'images/home/banner-3.jpg',
        webp: 'images/home/banner-3.webp',  
        title: 'CREATIVITY FOR INFLUENCE',
      },
      { 
        id:4,
        image: 'images/home/banner-4.jpg', 
        webp: 'images/home/banner-4.webp',  
        title: 'Point Of View',
      },
      { 
        id:5,
        image: 'images/home/banner-5.jpg',
        webp: 'images/home/banner-5.webp',  
        title: 'POV',
      }
    ];

    ngOnInit(){
      this.ScrollMagicService.initScrollMagic();
      this.NavbarThemeService.changeHeaderTheme('transToLight');
      this.CursorService.initializeCursorAnimation()
    }

}
