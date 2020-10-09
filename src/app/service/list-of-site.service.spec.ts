import { TestBed } from '@angular/core/testing';

import { ListOfSiteService } from './list-of-site.service';

describe('ListOfSiteService', () => {
  let service: ListOfSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
