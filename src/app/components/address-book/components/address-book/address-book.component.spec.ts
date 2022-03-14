import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks'
import { HttpClient } from '@angular/common/http';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { AddressBookComponent, title } from './address-book.component';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { BehaviorSubject, Observable } from 'rxjs';
import { addressBookSimple } from 'src/app/shared/model/add-book-simple';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBookSimpleEntry } from 'src/app/shared/data/empty-address-book-simple-entry';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
  let httpClient: Mock<HttpClient>;
  let randomUserProvider: Mock<RandomUserProvider>;
  let randomUserService: Mock<RandomUserService>;
  let addressBookBehavior: BehaviorSubject<addressBookSimple[]>
  
  beforeEach(() => {
    httpClient = new Mock<HttpClient>({
      get: Mock.ANY_FUNC
    });
    randomUserProvider  = new Mock<RandomUserProvider>({
       fetchRandomUsers: Mock.ANY_FUNC
    });

    addressBookBehavior = new BehaviorSubject<addressBookSimple[]>(addressBookData);
  
    randomUserService  = new Mock<RandomUserService>({
      fetchRandomUsers: addressBookBehavior.asObservable
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookComponent ],
      providers: [{ provide: HttpClient, useValue: httpClient.Object },
        { provide: RandomUserProvider, useValue: randomUserProvider.Object },
        { provide: RandomUserService, useValue: randomUserService.Object }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initially should equal', () => {
    expect(component.title).toEqual(title);
    expect(component.addressBookEntries).toEqual(addressBookData);
    expect(component.selectedAddressBookEntry).toEqual(emptyAddressBookSimpleEntry);
    expect(component.emptyAddressBookEntry).toEqual(emptyAddressBookSimpleEntry);
  });
  
  it('addressBookEntries should be populated', () => {
    component.addressBookEntries = []
    fixture.detectChanges();
    expect(component.addressBookEntries).toEqual([]);
    addressBookBehavior.next(addressBookData)
    fixture.detectChanges();
    expect(component.addressBookEntries).toEqual(addressBookData);
  });

  it('totalEntries should equal', () => {
    expect(component.totalEntries).toEqual(addressBookData.length);
    component.addressBookEntries = [];   
    fixture.detectChanges();
    expect(component.totalEntries).toEqual(0);
    component.addressBookEntries = addressBookData;   
    fixture.detectChanges();
    expect(component.totalEntries).toEqual(addressBookData.length);
  });

  it('onClick selectedAddressBookEntry should equal', () => {
    expect(component.totalEntries).toEqual(addressBookData.length);
    component.onClick(addressBookData[2])
    fixture.detectChanges();
    expect(component.selectedAddressBookEntry).toEqual(addressBookData[2]);
    component.onClick(addressBookData[0])
    fixture.detectChanges();
    expect(component.selectedAddressBookEntry).toEqual(addressBookData[0]);    
  });
});
