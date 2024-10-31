import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaveriComponent } from './kaveri.component';

describe('KaveriComponent', () => {
  let component: KaveriComponent;
  let fixture: ComponentFixture<KaveriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KaveriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaveriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
