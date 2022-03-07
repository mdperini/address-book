import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks'
import { RandomUserProvider } from './random-user-provider';

describe('Provider: RandomUserProvider', () => {
  let service: RandomUserProvider;
  let httpClient: Mock<HttpClient>;


  beforeEach(() => {
    httpClient = new Mock<HttpClient>();
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
});
