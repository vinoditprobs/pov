import { Component } from '@angular/core';
import { ScrollmagicService } from '../../services/scrollmagic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private scrollMagic: ScrollmagicService){}

    ngOnInit(){
      this.scrollMagic.initSM_ForHome
    }

    slideAssets = [
      { 
        image: 'images/home/banner-1.jpg', 
        title: 'expertise',
      }
    ];
   

}
