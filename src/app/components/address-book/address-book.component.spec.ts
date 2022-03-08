import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks'
import { HttpClient } from '@angular/common/http';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { AddressBookComponent, title } from './address-book.component';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { BehaviorSubject } from 'rxjs';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { ButtonActions } from 'src/app/shared/model/button-actions';

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

  it('initially should equal', () => {
    expect(component.title).toEqual(title);
    expect(component.addressBookEntries).toEqual(addressBookData);
    expect(component.selectedAddressBookEntry).toEqual(emptyAddressBookEntry);
    expect(component.emptyAddressBookEntry).toEqual(emptyAddressBookEntry);
  });
  
  it('On Init should', () => {
    spyOn<any>(component, 'initServices');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component['initServices']).toHaveBeenCalled();
  });

  it('On Destroy destroys subscription', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component['subscription'].unsubscribe).toHaveBeenCalled();
  });

  it('addressBookEntries should be populated', () => {
    component.addressBookEntries = []
    fixture.detectChanges();
    expect(component.addressBookEntries).toEqual([]);
    addressBookBehavior.next(addressBookData)
    fixture.detectChanges();
    expect(component.addressBookEntries).toEqual(addressBookData);
  });

  it('initServices should call', () => {
    spyOn<any>(component, 'fetchRandomUsers');
    component['initServices']();
    fixture.detectChanges();
    expect(component['fetchRandomUsers']).toHaveBeenCalled();
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

  it('onPageRequest should call', () => {
    spyOn<any>(component, 'fetchRandomUsers');
    component['onPageRequest'](ButtonActions.Next);
    fixture.detectChanges();
    expect(component['fetchRandomUsers']).toHaveBeenCalledWith(ButtonActions.Next);
    component['onPageRequest'](ButtonActions.Previous);
    fixture.detectChanges();
    expect(component['fetchRandomUsers']).toHaveBeenCalledWith(ButtonActions.Previous);

  });

});
