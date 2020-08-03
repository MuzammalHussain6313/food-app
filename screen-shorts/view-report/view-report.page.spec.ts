import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportPage } from './view-report.page';

describe('ViewReportPage', () => {
  let component: ViewReportPage;
  let fixture: ComponentFixture<ViewReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
