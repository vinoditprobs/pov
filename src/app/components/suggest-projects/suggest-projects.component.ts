import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-suggest-projects',
  templateUrl: './suggest-projects.component.html',
  styleUrl: './suggest-projects.component.scss'
})
export class SuggestProjectsComponent {

  visibleProjects: any = []

  constructor(private DataService: DataService){}

  ngOnInit(){
    this.DataService.getProjects().subscribe(data => {
      this.visibleProjects = data.sort(() => 0.5 - Math.random()).slice(0, 3);
    })
  }


}
