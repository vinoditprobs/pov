import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-ethos',
  templateUrl: './ethos.component.html',
  styleUrl: './ethos.component.scss'
})
export class EthosComponent {
  constructor(private NavbarThemeService: NavbarThemeService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('light')
  }
}
