import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainStrongComponent } from './train-strong.component';

describe('TrainStrongComponent', () => {
  let component: TrainStrongComponent;
  let fixture: ComponentFixture<TrainStrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainStrongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainStrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
