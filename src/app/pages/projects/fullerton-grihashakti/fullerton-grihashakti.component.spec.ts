import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullertonGrihashaktiComponent } from './fullerton-grihashakti.component';

describe('FullertonGrihashaktiComponent', () => {
  let component: FullertonGrihashaktiComponent;
  let fixture: ComponentFixture<FullertonGrihashaktiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullertonGrihashaktiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullertonGrihashaktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
