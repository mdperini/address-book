import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Mock } from 'ts-mocks'
import { addressBookData } from '../data/address-book-data';
import { addressBookSimple } from '../model/add-book-summary-simple';
import { ButtonActions } from '../model/button-actions';
import { RandomUserProvider } from '../provider/random-user-provider';
import { defaultEntriesPerPage, RandomUserService } from './random-user-service';

describe('Provider: RandomUserService', () => {
  let service: RandomUserService;
  let randomUserProvider: Mock<RandomUserProvider>;
  let addressBookBehavior: BehaviorSubject<addressBookSimple[]>; 
  
  beforeEach(() => {
    addressBookBehavior = new BehaviorSubject<addressBookSimple[]>(addressBookData);
    randomUserProvider  = new Mock<RandomUserProvider>({   
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

  it('entriesPerPage should equal default', () => {
    expect(service.entriesPerPage).toEqual(defaultEntriesPerPage);
  });

  it('entriesPerPage set / get as expected', () => {
    expect(service.entriesPerPage).toEqual(defaultEntriesPerPage);
    service.entriesPerPage = 50;
    expect(service.entriesPerPage).toEqual(50);
  });

  it('pageNumber to equal', () => {
    expect(service.pageNumber).toEqual(0);
    service.fetchRandomUsers(ButtonActions.Next)
    expect(service.pageNumber).toEqual(1);
    expect(randomUserProvider.Object.fetchRandomUsers).toHaveBeenCalledWith(service.pageNumber, service.entriesPerPage);
    service.fetchRandomUsers(ButtonActions.Next)
    expect(service.pageNumber).toEqual(2);
    expect(randomUserProvider.Object.fetchRandomUsers).toHaveBeenCalledWith(service.pageNumber, service.entriesPerPage);
    service.fetchRandomUsers(ButtonActions.Next)
    expect(service.pageNumber).toEqual(3);
    expect(randomUserProvider.Object.fetchRandomUsers).toHaveBeenCalledWith(service.pageNumber, service.entriesPerPage);
    service.fetchRandomUsers(ButtonActions.Previous)
    expect(service.pageNumber).toEqual(2);
    expect(randomUserProvider.Object.fetchRandomUsers).toHaveBeenCalledWith(service.pageNumber, service.entriesPerPage);
    service.fetchRandomUsers(ButtonActions.Previous)
    expect(service.pageNumber).toEqual(1);
    expect(randomUserProvider.Object.fetchRandomUsers).toHaveBeenCalledWith(service.pageNumber, service.entriesPerPage);
    service.fetchRandomUsers(ButtonActions.Previous)
    expect(service.pageNumber).toEqual(1);
    expect(randomUserProvider.Object.fetchRandomUsers).toHaveBeenCalledWith(service.pageNumber, service.entriesPerPage);
  });
});
