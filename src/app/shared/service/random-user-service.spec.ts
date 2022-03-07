import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Mock } from 'ts-mocks'
import { addressBookData } from '../data/address-book-data';
import { addressBookSimple } from '../model/add-book-summary-simple';
import { RandomUserProvider } from '../provider/random-user-provider';
import { RandomUserService } from './random-user-service';

describe('Provider: RandomUserService', () => {
  let service: RandomUserService;
  let randomUserProvider: Mock<RandomUserProvider>;
  let addressBookBehavior: BehaviorSubject<addressBookSimple[]>; 
  
  beforeEach(() => {
    addressBookBehavior = new BehaviorSubject<addressBookSimple[]>(addressBookData);
    randomUserProvider  = new Mock<RandomUserProvider>({
      addressBookObservable: addressBookBehavior.asObservable(),
      fetchRandomUsers: Mock.ANY_FUNC
    });
  
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: RandomUserProvider, useValue: randomUserProvider.Object }]
    });
    service = TestBed.inject(RandomUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
