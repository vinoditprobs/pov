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
      img:'images/about/gallery/about-gallery-5.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-6.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-7.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-8.jpg',
      title:''
    },
    {
      img:'images/about/gallery/about-gallery-9.jpg',
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
