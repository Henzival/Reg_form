import { TestBed } from '@angular/core/testing';

import { GetLanguagesService } from './get-languages.service';

describe('ParsingServiceService', () => {
  let service: GetLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
