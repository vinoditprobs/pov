import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoiComponent } from './zoi.component';

describe('ZoiComponent', () => {
  let component: ZoiComponent;
  let fixture: ComponentFixture<ZoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
