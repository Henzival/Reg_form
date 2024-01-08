import { TestBed } from '@angular/core/testing';

import { ParsingServiceService } from './parsing-service.service';

describe('ParsingServiceService', () => {
  let service: ParsingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParsingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
