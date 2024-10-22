import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  navBarColor : string = 'transToLight'

  constructor(private ScrollMagicService: ScrollMagicService, private NavbarThemeService: NavbarThemeService, private _loader: LoaderService){
    this._loader.show();
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

    ngOnInit(){
      this.ScrollMagicService.initScrollMagic();
      this.NavbarThemeService.changeHeaderTheme('transToLight');
     // console.log('From Home');
    }

    ngAfterViewInit(){
      setTimeout(()=> {
        this._loader.hide();
      }, 500)
     
    }


}
