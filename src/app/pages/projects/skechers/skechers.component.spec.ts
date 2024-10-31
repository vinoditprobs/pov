import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkechersComponent } from './skechers.component';

describe('SkechersComponent', () => {
  let component: SkechersComponent;
  let fixture: ComponentFixture<SkechersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkechersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkechersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
