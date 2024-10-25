import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaharExcaliburComponent } from './nahar-excalibur.component';

describe('NaharExcaliburComponent', () => {
  let component: NaharExcaliburComponent;
  let fixture: ComponentFixture<NaharExcaliburComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaharExcaliburComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaharExcaliburComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
