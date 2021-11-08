import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crupdops1Component } from './crupdops1.component';

describe('Crupdops1Component', () => {
  let component: Crupdops1Component;
  let fixture: ComponentFixture<Crupdops1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crupdops1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crupdops1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
