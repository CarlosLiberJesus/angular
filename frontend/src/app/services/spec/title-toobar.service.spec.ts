import { TestBed } from '@angular/core/testing';

import { TitleToobarService } from './title-toobar.service';

describe('TitleToobarService', () => {
  let service: TitleToobarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleToobarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
