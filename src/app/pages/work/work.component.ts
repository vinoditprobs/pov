import { Component} from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { DataService } from '../../services/data.service';


interface projectInterface{
  title: string,
  description: string
  image: string
  categories: string[],
  exploreUrl: string
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  projects: any = []
  visibleProjects: any = []
  filteredProjects: any = []
  selectedCategory: string | null = null;

  itemsVisible: number = 4

  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService, private DataService: DataService){}
  ngOnInit(){
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();

    this.DataService.getProjects().subscribe(data => {
      this.projects = data
      this.filteredProjects = this.projects;
    })

    this.updateVisibleProjects();

  }


  updateVisibleProjects(){
    this.visibleProjects = this.filteredProjects.slice(0, this.itemsVisible)
  }

  loadMore(){
    this.itemsVisible += 4;
    this.updateVisibleProjects();
  }

  onSelectCategory(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null; 
      this.visibleProjects = this.filteredProjects;  
    } else {
      this.selectedCategory = category; 
      this.visibleProjects = this.filteredProjects.filter((project: projectInterface) =>
        project.categories.includes(category)
      );
    }
  }

  
}
