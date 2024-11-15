import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGreatnessComponent } from './choose-greatness.component';

describe('ChooseGreatnessComponent', () => {
  let component: ChooseGreatnessComponent;
  let fixture: ComponentFixture<ChooseGreatnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseGreatnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseGreatnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
