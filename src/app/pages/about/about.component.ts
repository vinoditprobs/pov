import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private NavbarThemeService: NavbarThemeService){}


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
    //alert();

  }
  
}
