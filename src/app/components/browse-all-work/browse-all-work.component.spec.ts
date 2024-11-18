import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllWorkComponent } from './browse-all-work.component';

describe('BrowseAllWorkComponent', () => {
  let component: BrowseAllWorkComponent;
  let fixture: ComponentFixture<BrowseAllWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseAllWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseAllWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
