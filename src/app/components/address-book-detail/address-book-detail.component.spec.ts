import { ComponentFixture, TestBed } from '@angular/core/testing';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';

import { AddressBookDetailComponent } from './address-book-detail.component';

describe('AddressBookDetailComponent', () => {
  let component: AddressBookDetailComponent;
  let fixture: ComponentFixture<AddressBookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initially should equal', () => {
    expect(component.addressBookEntry).toEqual(emptyAddressBookEntry);
  });

  it('on clear should equal', () => {
    component.addressBookEntry = addressBookData[0]
    expect(component.addressBookEntry).toEqual(addressBookData[0]);
    component.onClear();
    expect(component.addressBookEntry).toEqual(emptyAddressBookEntry);
  });
});
