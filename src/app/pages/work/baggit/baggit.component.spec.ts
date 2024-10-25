import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggitComponent } from './baggit.component';

describe('BaggitComponent', () => {
  let component: BaggitComponent;
  let fixture: ComponentFixture<BaggitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaggitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
