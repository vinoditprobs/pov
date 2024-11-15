import { Component } from '@angular/core';
import { NavbarThemeService } from '../../../services/navbar-theme.service';
import { ScrollMagicService } from '../../../services/scroll-magic.service';

@Component({
  selector: 'app-train-strong',
  templateUrl: './train-strong.component.html',
  styleUrl: './train-strong.component.scss'
})
export class TrainStrongComponent {
  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
  }
}
