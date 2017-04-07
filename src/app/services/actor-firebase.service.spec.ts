import { TestBed, inject } from '@angular/core/testing';

import { ActorFirebaseService } from './actor-firebase.service';

describe('ActorFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorFirebaseService]
    });
  });

  it('should ...', inject([ActorFirebaseService], (service: ActorFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
