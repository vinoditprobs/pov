import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ethos',
  templateUrl: './ethos.component.html',
  styleUrl: './ethos.component.scss'
})
export class EthosComponent {

  clients: any = []
  
  constructor(private NavbarThemeService: NavbarThemeService,private data: DataService){
    this.data.getClients().subscribe(data => {
      this.clients = data
    })
  }
  

  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark')
  }
}
