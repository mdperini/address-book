import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookHeaderComponent } from './address-book-header.component';

describe('AddressBookHeaderComponent', () => {
  let component: AddressBookHeaderComponent;
  let fixture: ComponentFixture<AddressBookHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('');
  });
});
