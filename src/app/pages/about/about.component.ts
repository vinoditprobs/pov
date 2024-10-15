import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService, public _loader: LoaderService){
    this._loader.show();
  }

  gallery = [
    {
      img:'images/about/gallery/about-gallery-1.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-2.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-3.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-4.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-1.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-2.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-3.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-4.jpg',
      title:''
    },
  ]

  ngOnInit(){
   
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
    //alert();
    setTimeout(()=> {
      this._loader.hide();
    }, 500)

  }
  
}
