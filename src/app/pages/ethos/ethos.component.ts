import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';

@Component({
  selector: 'app-ethos',
  templateUrl: './ethos.component.html',
  styleUrl: './ethos.component.scss'
})
export class EthosComponent {
  constructor(private NavbarThemeService: NavbarThemeService){}
  clients = [
    {
      img:'images/clients/skechers.png',
      title:'Skechers'
    },
    {
      img:'images/clients/zee-digital.png',
      title:'Zee Digital'
    },
    {
      img:'images/clients/nahar.png',
      title:'Nahar'
    },
    {
      img:'images/clients/kaveri.png',
      title:'Kaveri'
    },
    {
      img:'images/clients/icici.png',
      title:'ICICI Prudential'
    },
    {
      img:'images/clients/garden-vareli.png',
      title:'Garden Vareli'
    },
    {
      img:'images/clients/essence.png',
      title:'Essence'
    },
    {
      img:'images/clients/baggit.png',
      title:'Baggit'
    },
    {
      img:'images/clients/aditya-birla-group.png',
      title:'Aditya Birla Group'
    },
    {
      img:'images/clients/360-one.png',
      title:'360 One'
    },
    {
      img:'images/clients/shemaroo.png',
      title:'Shemaroo'
    },
    {
      img:'images/clients/aditya-birla-group.png',
      title:'Mini Plex'
    },
  ]
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark')
  }
}
