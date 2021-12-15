import { TestBed } from '@angular/core/testing';

import { EatGuard } from './eat.guard';

describe('EatGuard', () => {
  let guard: EatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
