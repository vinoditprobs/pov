import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-work-banner',
  templateUrl: './work-banner.component.html',
  styleUrl: './work-banner.component.scss'
})
export class WorkBannerComponent {
  @Input() bannerImg = ''
  @Input() vector = ''
  @Input() title = ''

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(){
      const workBanner = this.document.querySelector('.workbanner');
      workBanner?.classList.add('stop')
      setTimeout(() => {
        workBanner?.classList.remove('stop')
      }, 4000)
  }


}
