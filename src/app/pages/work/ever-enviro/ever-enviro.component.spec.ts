import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverEnviroComponent } from './ever-enviro.component';

describe('EverEnviroComponent', () => {
  let component: EverEnviroComponent;
  let fixture: ComponentFixture<EverEnviroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EverEnviroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverEnviroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
