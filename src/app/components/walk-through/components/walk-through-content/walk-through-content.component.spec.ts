import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkThroughContentComponent } from './walk-through-content.component';

describe('WalkThroughContentComponent', () => {
  let component: WalkThroughContentComponent;
  let fixture: ComponentFixture<WalkThroughContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkThroughContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkThroughContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
