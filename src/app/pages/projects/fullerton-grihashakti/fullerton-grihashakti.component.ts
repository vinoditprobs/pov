import { Component } from '@angular/core';
import { NavbarThemeService } from '../../../services/navbar-theme.service';
import { ScrollMagicService } from '../../../services/scroll-magic.service';

@Component({
  selector: 'app-fullerton-grihashakti',
  templateUrl: './fullerton-grihashakti.component.html',
  styleUrl: './fullerton-grihashakti.component.scss'
})
export class FullertonGrihashaktiComponent {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
  }
}
