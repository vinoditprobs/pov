import { Component } from '@angular/core';
import { ScrollMagicService } from '../../services/scroll-magic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private ScrollMagicService: ScrollMagicService){}

    ngOnInit(){
      this.ScrollMagicService.initScrollMagic()
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
