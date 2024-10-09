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
      }
    ];
   

}
