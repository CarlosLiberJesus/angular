import { TestBed } from '@angular/core/testing';
import { TitleToolbarService } from '../title-toolbar.service';

describe('TitleToolbarService', () => {
  let service: TitleToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
