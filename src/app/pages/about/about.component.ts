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
  

  clients = [
    {
      img:'images/clients/skechers.png',
      title:'Skechers'
    },
    {
      img:'images/clients/zee-digital.png',
      title:'Zee Digital'
    },
    {
      img:'images/clients/nahar.png',
      title:'Nahar'
    },
    {
      img:'images/clients/kaveri.png',
      title:'Kaveri'
    },
    {
      img:'images/clients/icici.png',
      title:'ICICI Prudential'
    },
    {
      img:'images/clients/garden-vareli.png',
      title:'Garden Vareli'
    },
    {
      img:'images/clients/essence.png',
      title:'Essence'
    },
    {
      img:'images/clients/baggit.png',
      title:'Baggit'
    },
    {
      img:'images/clients/aditya-birla-group.png',
      title:'Aditya Birla Group'
    },
    {
      img:'images/clients/360-one.png',
      title:'360 One'
    },
    {
      img:'images/clients/shemaroo.png',
      title:'Shemaroo'
    },
    {
      img:'images/clients/aditya-birla-group.png',
      title:'Mini Plex'
    },
  ]

}
