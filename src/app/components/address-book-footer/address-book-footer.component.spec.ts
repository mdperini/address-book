import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks'
import { HttpClient } from '@angular/common/http';
import { AddressBookFooterComponent } from './address-book-footer.component';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

describe('AddressBookFooterComponent', () => {
  let component: AddressBookFooterComponent;
  let fixture: ComponentFixture<AddressBookFooterComponent>;
  let httpClient: Mock<HttpClient>;
  let randomUserService: Mock<RandomUserService>;

  let pageNumber = 1;
  let entriesPerPage = 10;

  beforeEach(() => {
    httpClient = new Mock<HttpClient>();
    randomUserService  = new Mock<RandomUserService>({
      pageNumber: pageNumber,
      entriesPerPage: entriesPerPage
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookFooterComponent ],
      providers: [{ provide: HttpClient, useValue: httpClient.Object },
                  { provide: RandomUserService, useValue: randomUserService.Object }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.entries).toEqual(0);
  });

  it('should get page number', () => {
    expect(component.pageNumber).toEqual(pageNumber);
  });

  it('should get entries per page', () => {
    expect(component.entriesPerPage).toEqual(entriesPerPage);
  });
  
});
