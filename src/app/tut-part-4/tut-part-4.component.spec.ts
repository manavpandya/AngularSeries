import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutPart4Component } from './tut-part-4.component';

describe('TutPart4Component', () => {
  let component: TutPart4Component;
  let fixture: ComponentFixture<TutPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
