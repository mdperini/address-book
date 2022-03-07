import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks'
import { HttpClient } from '@angular/common/http';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { AddressBookComponent } from './address-book.component';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { BehaviorSubject } from 'rxjs';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';
import { addressBookData } from 'src/app/shared/data/address-book-data';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
  let httpClient: Mock<HttpClient>;
  let randomUserProvider: Mock<RandomUserProvider>;
  let randomUserService: Mock<RandomUserService>;
  let addressBookBehavior: BehaviorSubject<addressBookSimple[]>; 
  
  beforeEach(() => {
    httpClient = new Mock<HttpClient>();
    addressBookBehavior = new BehaviorSubject<addressBookSimple[]>(addressBookData);
    randomUserProvider  = new Mock<RandomUserProvider>({
      addressBookObservable: addressBookBehavior.asObservable(),
      fetchRandomUsers: Mock.ANY_FUNC
    });
    randomUserService  = new Mock<RandomUserService>({
      fetchRandomUsers: Mock.ANY_FUNC
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
