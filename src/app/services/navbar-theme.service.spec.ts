import { TestBed } from '@angular/core/testing';

import { NavbarThemeService } from './navbar-theme.service';

describe('NavbarThemeService', () => {
  let service: NavbarThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
