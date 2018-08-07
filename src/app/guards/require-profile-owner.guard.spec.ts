import { TestBed, async, inject } from '@angular/core/testing';

import { RequireProfileOwnerGuard } from './require-profile-owner.guard';

describe('RequireProfileOwnerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireProfileOwnerGuard]
    });
  });

  it('should ...', inject([RequireProfileOwnerGuard], (guard: RequireProfileOwnerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
