import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mock } from 'ts-mocks'
import { addressBookData } from '../data/address-book-data';
import { addressBookSimple } from '../model/add-book-summary-simple';
import { RandomUserProvider } from './random-user-provider';

describe('Provider: RandomUserProvider', () => {
  let service: RandomUserProvider;
  let httpClient: Mock<HttpClient>;
  let addressBookBehavior: BehaviorSubject<addressBookSimple[]>; 
   
  beforeEach(() => {
    httpClient = new Mock<HttpClient>({
      jsonp: Mock.ANY_FUNC
    });
    addressBookBehavior = new BehaviorSubject<addressBookSimple[]>([]);    
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClient.Object }]
    });
    service = TestBed.inject(RandomUserProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('On Destroy destroys subscription', () => {
    spyOn(service['subscription'], 'unsubscribe');
    service.ngOnDestroy();
    expect(service['subscription'].unsubscribe).toHaveBeenCalled();
  });
  
});
