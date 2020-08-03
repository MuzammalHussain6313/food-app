import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagePage } from './upload-image.page';

describe('UploadImagePage', () => {
  let component: UploadImagePage;
  let fixture: ComponentFixture<UploadImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
