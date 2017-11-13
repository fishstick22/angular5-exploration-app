import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from '../model/hero.service';
import { HeroDetailService } from './hero-detail.service';

describe('HeroDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailService, HeroService]
    });
  });

  it('should be created', inject([HeroDetailService], (service: HeroDetailService) => {
    expect(service).toBeTruthy();
  }));
});
