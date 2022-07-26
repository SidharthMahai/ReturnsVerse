/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PpfComponent } from './ppf.component';

describe('PpfComponent', () => {
  let component: PpfComponent;
  let fixture: ComponentFixture<PpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
