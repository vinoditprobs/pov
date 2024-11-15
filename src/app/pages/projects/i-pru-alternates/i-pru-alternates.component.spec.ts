import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPruAlternatesComponent } from './i-pru-alternates.component';

describe('IPruAlternatesComponent', () => {
  let component: IPruAlternatesComponent;
  let fixture: ComponentFixture<IPruAlternatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPruAlternatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPruAlternatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
