import { TestBed } from '@angular/core/testing';

import { CharactersheetApiService } from './charactersheet-api.service';

describe('CharactersheetApiService', () => {
  let service: CharactersheetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersheetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
