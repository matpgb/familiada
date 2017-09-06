import { TestBed, inject } from '@angular/core/testing';

import { SoundAlertService } from './sound-alert.service';

describe('SoundAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoundAlertService]
    });
  });

  it('should be created', inject([SoundAlertService], (service: SoundAlertService) => {
    expect(service).toBeTruthy();
  }));
});
