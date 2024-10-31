import { ComponentFixture, TestBed } from '@angular/core/testing';

import { One360Component } from './one-360.component';

describe('One360Component', () => {
  let component: One360Component;
  let fixture: ComponentFixture<One360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [One360Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(One360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
