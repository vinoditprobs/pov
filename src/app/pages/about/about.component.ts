import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private NavbarThemeService: NavbarThemeService){}
  ngOnInit(){
   
    this.NavbarThemeService.changeHeaderTheme('light');
    //alert();
  }
}
