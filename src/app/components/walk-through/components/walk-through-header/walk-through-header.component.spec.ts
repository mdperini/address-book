import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkThroughHeaderComponent } from './walk-through-header.component';

describe('WalkThroughHeaderComponent', () => {
  let component: WalkThroughHeaderComponent;
  let fixture: ComponentFixture<WalkThroughHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkThroughHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkThroughHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
