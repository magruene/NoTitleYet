import { TestBed, inject } from '@angular/core/testing';

import { SessionInfoService } from './session-info.service';

describe('SessionInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionInfoService]
    });
  });

  it('should ...', inject([SessionInfoService], (service: SessionInfoService) => {
    expect(service).toBeTruthy();
  }));
});
