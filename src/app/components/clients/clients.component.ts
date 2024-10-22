import { Component} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  clients: any = []

  constructor(private data: DataService){
    this.data.getClients().subscribe(data => {
      this.clients = data
    })
  }

  ngOnInit(){
    //console.log(this.clients)
  }
 
}
