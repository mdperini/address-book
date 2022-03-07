import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookFooterComponent } from './address-book-footer.component';

describe('AddressBookFooterComponent', () => {
  let component: AddressBookFooterComponent;
  let fixture: ComponentFixture<AddressBookFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
