import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTickerComponent } from './gallery-ticker.component';

describe('GalleryTickerComponent', () => {
  let component: GalleryTickerComponent;
  let fixture: ComponentFixture<GalleryTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryTickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
