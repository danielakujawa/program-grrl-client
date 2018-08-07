import { TestBed, async, inject } from '@angular/core/testing';

import { RequireSponsorGuard } from './require-sponsor.guard';

describe('RequireSponsorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireSponsorGuard]
    });
  });

  it('should ...', inject([RequireSponsorGuard], (guard: RequireSponsorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
