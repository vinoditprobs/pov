import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-interactive-cursor-section',
  templateUrl: './interactive-cursor-section.component.html',
  styleUrls: ['./interactive-cursor-section.component.scss']
})
export class InteractiveCursorSectionComponent {
  items: any[] = [];
  possibleItems = [
    { type: 'text', text: 'People' },
    { type: 'text', text: 'Craft' },
    { type: 'text', text: 'Aesthetic' },
    { type: 'text', text: 'Art' },
    { type: 'text', text: 'Fashion' },
    { type: 'text', text: 'Sports' },
    { type: 'text', text: 'Installations' },
    { type: 'text', text: 'Culture' },
    { type: 'text', text: 'Community' },
    { type: 'text', text: 'Underground' },
    { type: 'text', text: 'Immersive' },
    { type: 'text', text: 'Experience' },
    { type: 'text', text: 'Innovation' },
    { type: 'text', text: 'Visual' },
    { type: 'text', text: 'Film' },
    { type: 'text', text: 'Expression' },
    { type: 'image', src: 'images/ethos/key-1.jpg' },
    { type: 'image', src: 'images/ethos/key-2.jpg' },
    { type: 'image', src: 'images/ethos/key-3.jpg' },
    { type: 'image', src: 'images/ethos/key-4.jpg' },
    { type: 'image', src: 'images/ethos/key-5.jpg' },
    { type: 'image', src: 'images/ethos/key-6.jpg' },
    { type: 'image', src: 'images/ethos/key-7.jpg' }
  ];

  itemTimers: any[] = [];
  autoItemInterval: any; // Interval for automatic item generation
  lastX: number = 0;
  lastY: number = 0;
  minDistance: number = 300; // Minimum distance in pixels to trigger new items

  constructor(@Inject(PLATFORM_ID) private platformId: Object,){}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
     if (window.innerWidth <= 1200) {
         this.startAutoItemGeneration();
      }else{
        this.stopAutoItemGeneration();
      }
     
    }

  }

  // Start automatic item generation at intervals
  startAutoItemGeneration() {
    this.autoItemInterval = setInterval(() => {
      this.addRandomItem();
    }, 700); // Adjust interval time as needed (1000ms = 1 second)
  }

  // Method to display items at random positions
  addRandomItem() {

    if (isPlatformBrowser(this.platformId)){
    const randomItem = this.possibleItems[Math.floor(Math.random() * this.possibleItems.length)];
    // Generate random positions within the viewport
    const randomX = Math.random() * (window.innerWidth - 40); // Adjust for item size
    const randomY = Math.random() * (window.innerHeight - 40); // Adjust for item size

    const newItem = {
      ...randomItem,
      top: randomY,
      left: randomX,
      bgWhite: randomItem.type === 'text' ? Math.random() > 0.5 : false
    };

    this.items.push(newItem);

    // Create a timer for this specific item to disappear after 5 seconds
    const timer = setTimeout(() => {
      this.items = this.items.filter(item => item !== newItem);
    }, 4000);

    // Store the timer for this item so we can track it
    this.itemTimers.push(timer);

  }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   if (isPlatformBrowser(this.platformId)){
  //   if (window.innerWidth <= 1200) {
  //     this.startAutoItemGeneration();
  //   } else {
  //     this.stopAutoItemGeneration();
  //   }
  // }
  // }

  // Stop automatic item generation
  stopAutoItemGeneration() {
    if (this.autoItemInterval) {
      clearInterval(this.autoItemInterval);
      this.autoItemInterval = null; // Reset the interval
    }
  }

  onMouseMove(event: MouseEvent) {

    if (window.innerWidth <= 1200) {
      return; 
    }else{

      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Calculate the distance moved from the last item position
      const distanceMoved = Math.sqrt(Math.pow(mouseX - this.lastX, 2) + Math.pow(mouseY - this.lastY, 2));
  
      // If the distance is less than the minimum threshold, do nothing
      if (distanceMoved < this.minDistance) {
        return;
      }
  
      // Randomly pick an item from the possible items list
      const randomItem = this.possibleItems[Math.floor(Math.random() * this.possibleItems.length)];
  
      // Add the new item at the current mouse position
      const newItem = {
        ...randomItem,
        top: mouseY - 20, // Adjusting position vertically
        left: mouseX - 20, // Adjusting position horizontally
        bgWhite: randomItem.type === 'text' ? Math.random() > 0.5 : false
      };
  
      // Push the new item into the array to display multiple items
      this.items.push(newItem);
  
      // Store the current position as the last position
      this.lastX = mouseX;
      this.lastY = mouseY;
  
      // Create a timer for this specific item to disappear after 5 seconds
      const timer = setTimeout(() => {
        this.items = this.items.filter(item => item !== newItem);
      }, 4000);
  
      // Store the timer for this item so we can track it
      this.itemTimers.push(timer);

    }

   
  }

  ngOnDestroy() {
    // Clear timers and interval when the component is destroyed
    this.itemTimers.forEach(timer => clearTimeout(timer));
    this.stopAutoItemGeneration();
  }
}
