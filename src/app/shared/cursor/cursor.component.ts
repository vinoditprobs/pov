import { Component, HostListener } from '@angular/core';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'] // Updated this line
})
export class CursorComponent {
  
 
  constructor(private cursorService: CursorService) {}

  ngAfterViewInit(): void {
    this.cursorService.initializeCursorAnimation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorService.updateMousePosition(event);
  }
  
}
