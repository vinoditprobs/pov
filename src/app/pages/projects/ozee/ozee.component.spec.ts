import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzeeComponent } from './ozee.component';

describe('OzeeComponent', () => {
  let component: OzeeComponent;
  let fixture: ComponentFixture<OzeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OzeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OzeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
