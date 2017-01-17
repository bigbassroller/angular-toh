/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroSearchService } from './hero-search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });

  it('should ...', inject([HeroSearchService], (service: HeroSearchService) => {
    expect(service).toBeTruthy();
  }));
});
