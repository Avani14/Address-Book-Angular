import { TestBed } from '@angular/core/testing';

import { AddressBookServiceService } from './address-book-service.service';

describe('AddressBookServiceService', () => {
  let service: AddressBookServiceService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
