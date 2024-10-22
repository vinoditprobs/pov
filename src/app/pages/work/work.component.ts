import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
  }

}
