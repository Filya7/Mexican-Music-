import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Beatbox } from './main.page';

describe('MainPage', () => {
  let component: Beatbox;
  let fixture: ComponentFixture<Beatbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Beatbox ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Beatbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
