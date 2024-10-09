import { TestBed } from '@angular/core/testing';

import { ScrollmagicService } from './scrollmagic.service';

describe('ScrollmagicService', () => {
  let service: ScrollmagicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollmagicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
