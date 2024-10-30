import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CursorService } from '../../services/cursor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit, OnDestroy {
  private routeSubscription!: Subscription;

  constructor(private cursorService: CursorService, private router: Router) {}

  ngOnInit(): void {
    // Initialize cursor animation on first load
    this.cursorService.initializeCursorAnimation();

    // Re-initialize on every page navigation
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.cursorService.initializeCursorAnimation();
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorService.updateMousePosition(event);
  }

  ngOnDestroy(): void {
    // Unsubscribe from router events to avoid memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
