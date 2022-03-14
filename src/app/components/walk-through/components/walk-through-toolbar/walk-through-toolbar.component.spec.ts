import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkThroughToolbarComponent } from './walk-through-toolbar.component';

describe('WalkThroughToolbarComponent', () => {
  let component: WalkThroughToolbarComponent;
  let fixture: ComponentFixture<WalkThroughToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkThroughToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkThroughToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
