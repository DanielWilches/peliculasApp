import { TestBed } from '@angular/core/testing';

import { DataUIService } from './data-ui.service';

describe('DataUIService', () => {
  let service: DataUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
