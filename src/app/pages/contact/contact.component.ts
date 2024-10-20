import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private NavbarThemeService: NavbarThemeService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark')
  }
}
