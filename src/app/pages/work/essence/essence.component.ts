import { Component } from '@angular/core';
import { NavbarThemeService } from '../../../services/navbar-theme.service';
import { ScrollMagicService } from '../../../services/scroll-magic.service';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrl: './essence.component.scss'
})
export class EssenceComponent {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
  }
}
