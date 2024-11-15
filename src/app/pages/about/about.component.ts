import { Component, AfterViewInit } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { DataService } from '../../services/data.service';
import { CursorService } from '../../services/cursor.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{

  clients: any = []
  
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService, private DataService: DataService){}
 
  gallery = [
    {
      id:1,
      img:'images/about/tickr/tickr-1.jpg',
      webp:'images/about/tickr/tickr-1.webp',
      title:''
    },
    {
      id:2,
      img:'images/about/tickr/tickr-2.jpg',
      webp:'images/about/tickr/tickr-2.webp',
      title:''
    },
    {
      id:3,
      img:'images/about/tickr/tickr-3.jpg',
      webp:'images/about/tickr/tickr-3.webp',
      title:''
    },
    {
      id:4,
      img:'images/about/tickr/tickr-4.jpg',
      webp:'images/about/tickr/tickr-4.webp',
      title:''
    },
    {
      id:5,
      img:'images/about/tickr/tickr-5.jpg',
      webp:'images/about/tickr/tickr-5.webp',
      title:''
    },
    {
      id:6,
      img:'images/about/tickr/tickr-6.jpg',
      webp:'images/about/tickr/tickr-6.webp',
      title:''
    },
    {
      id:7,
      img:'images/about/tickr/tickr-7.jpg',
      webp:'images/about/tickr/tickr-7.webp',
      title:''
    },
    {
      id:8,
      img:'images/about/tickr/tickr-8.jpg',
      webp:'images/about/tickr/tickr-8.webp',
      title:''
    }
  ]

  ngOnInit(){
   
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();

    this.DataService.getClients().subscribe(data => {
      this.clients = data
    })

  }


}
