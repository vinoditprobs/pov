import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  constructor(private NavbarThemeService: NavbarThemeService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('light')
  }

}
