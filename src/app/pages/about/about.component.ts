import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { LoaderService } from '../../services/loader.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  clients: any = []
  
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService, public _loader: LoaderService, private DataService: DataService){
    this._loader.show();
  }

  gallery = [
    {
      id:1,
      img:'images/about/gallery/about-gallery-1.jpg',
      webp:'images/about/gallery/about-gallery-1.webp',
      title:''
    },
    {
      id:2,
      img:'images/about/gallery/about-gallery-2.jpg',
      webp:'images/about/gallery/about-gallery-2.webp',
      title:''
    },
    {
      id:3,
      img:'images/about/gallery/about-gallery-3.jpg',
      webp:'images/about/gallery/about-gallery-3.webp',
      title:''
    },
    {
      id:4,
      img:'images/about/gallery/about-gallery-4.jpg',
      webp:'images/about/gallery/about-gallery-4.webp',
      title:''
    },
    {
      id:5,
      img:'images/about/gallery/about-gallery-5.jpg',
      webp:'images/about/gallery/about-gallery-5.webp',
      title:''
    },
    {
      id:6,
      img:'images/about/gallery/about-gallery-6.jpg',
      webp:'images/about/gallery/about-gallery-6.webp',
      title:''
    },
    {
      id:7,
      img:'images/about/gallery/about-gallery-7.jpg',
      webp:'images/about/gallery/about-gallery-7.webp',
      title:''
    },
    {
      id:8,
      img:'images/about/gallery/about-gallery-8.jpg',
      webp:'images/about/gallery/about-gallery-8.webp',
      title:''
    },
    {
      id:9,
      img:'images/about/gallery/about-gallery-9.jpg',
      webp:'images/about/gallery/about-gallery-9.webp',
      title:''
    }
  ]

  ngOnInit(){
   
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
    //alert();
    setTimeout(()=> {
      this._loader.hide();
    }, 500);


    this.DataService.getClients().subscribe(data => {
      this.clients = data
    })

  }
  



}
