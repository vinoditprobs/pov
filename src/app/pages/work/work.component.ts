import { Component} from '@angular/core';
import { NavbarThemeService } from '../../services/navbar-theme.service';
import { ScrollMagicService } from '../../services/scroll-magic.service';
import { DataService } from '../../services/data.service';


interface projectInterface{
  id: number,
  title: string,
  description: string
  image: string
  webp: string
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

  itemsVisible: number = 8

  constructor(private NavbarThemeService: NavbarThemeService, private ScrollMagicService: ScrollMagicService, private DataService: DataService){}
  ngOnInit(){
    
    this.NavbarThemeService.changeHeaderTheme('dark');
    this.ScrollMagicService.initScrollMagic();
    

    this.DataService.getProjects().subscribe(data => {
      this.projects = data
      this.filteredProjects = this.projects;
      this.updateVisibleProjects();
    })

    
  }


  updateVisibleProjects(){
    this.visibleProjects = this.filteredProjects.slice(0, this.itemsVisible)
  }

  loadMore(){
    this.itemsVisible += 4;
    this.updateVisibleProjects();
    console.log('Selected ', this.filteredProjects)
    console.log('visibleProjects ', this.visibleProjects)
  }

  onSelectCategory(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
      this.filteredProjects = this.projects;  
    } else {
      this.selectedCategory = category;
      this.filteredProjects = this.projects.filter((project: projectInterface) =>
        project.categories.includes(category)
      );
    }
    this.itemsVisible = 4;
    this.updateVisibleProjects();
    console.log('Selected ', this.filteredProjects)
    console.log('visibleProjects ', this.visibleProjects)
  }

  
}
