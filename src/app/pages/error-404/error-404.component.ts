import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
  }
}
