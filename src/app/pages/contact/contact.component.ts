import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('light');
    this.NavbarThemeService.changeFooterTheme('light');
    this.ScrollMagicService.initScrollMagic();
  }
}
