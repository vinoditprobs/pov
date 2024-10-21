import { Component} from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

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

 
}
