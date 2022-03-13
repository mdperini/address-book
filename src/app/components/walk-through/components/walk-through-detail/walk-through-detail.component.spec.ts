import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkThroughDetailComponent } from './walk-through-detail.component';

describe('WalkThroughDetailComponent', () => {
  let component: WalkThroughDetailComponent;
  let fixture: ComponentFixture<WalkThroughDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkThroughDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkThroughDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
