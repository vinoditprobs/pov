import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxKeywordComponent } from './parallax-keyword.component';

describe('ParallaxKeywordComponent', () => {
  let component: ParallaxKeywordComponent;
  let fixture: ComponentFixture<ParallaxKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParallaxKeywordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
