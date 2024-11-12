import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBannerComponent } from './work-banner.component';

describe('WorkBannerComponent', () => {
  let component: WorkBannerComponent;
  let fixture: ComponentFixture<WorkBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
