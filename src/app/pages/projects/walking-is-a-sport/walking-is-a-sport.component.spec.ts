import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingIsASportComponent } from './walking-is-a-sport.component';

describe('WalkingIsASportComponent', () => {
  let component: WalkingIsASportComponent;
  let fixture: ComponentFixture<WalkingIsASportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalkingIsASportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkingIsASportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
