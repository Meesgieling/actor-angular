import { TestBed, inject } from '@angular/core/testing';

import { PersonFirebaseService } from './person-firebase.service';

describe('PersonFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonFirebaseService]
    });
  });

  it('should ...', inject([PersonFirebaseService], (service: PersonFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
