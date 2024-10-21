import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCursorSectionComponent } from './interactive-cursor-section.component';

describe('InteractiveCursorSectionComponent', () => {
  let component: InteractiveCursorSectionComponent;
  let fixture: ComponentFixture<InteractiveCursorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteractiveCursorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveCursorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
