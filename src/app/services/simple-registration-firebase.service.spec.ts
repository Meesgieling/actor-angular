import { TestBed, inject } from '@angular/core/testing';

import { SimpleRegistrationFirebaseService } from './simple-registration-firebase.service';

describe('SimpleRegistrationFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleRegistrationFirebaseService]
    });
  });

  it('should ...', inject([SimpleRegistrationFirebaseService], (service: SimpleRegistrationFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
