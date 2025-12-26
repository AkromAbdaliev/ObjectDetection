import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgControl } from './img-control';

describe('ImgControl', () => {
  let component: ImgControl;
  let fixture: ComponentFixture<ImgControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
