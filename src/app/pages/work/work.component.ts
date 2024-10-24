import { Component } from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  projects: any = []

  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService, private DataService: DataService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();

    this.DataService.getProjects().subscribe(data => {

      this.projects = data

    })

  }

}
