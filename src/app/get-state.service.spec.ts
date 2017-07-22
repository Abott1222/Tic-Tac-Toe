import { TestBed, inject } from '@angular/core/testing';

import { GetStateService } from './get-state.service';

describe('GetStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetStateService]
    });
  });

  it('should ...', inject([GetStateService], (service: GetStateService) => {
    expect(service).toBeTruthy();
  }));
});
