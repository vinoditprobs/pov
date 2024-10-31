import { Component } from '@angular/core';
import { NavbarThemeService } from '../../../services/navbar-theme.service';
import { ScrollMagicService } from '../../../services/scroll-magic.service';

@Component({
  selector: 'app-zoi',
  templateUrl: './zoi.component.html',
  styleUrl: './zoi.component.scss'
})
export class ZoiComponent {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
  }
}
