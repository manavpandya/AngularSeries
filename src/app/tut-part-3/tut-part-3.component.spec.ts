import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutPart3Component } from './tut-part-3.component';

describe('TutPart3Component', () => {
  let component: TutPart3Component;
  let fixture: ComponentFixture<TutPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
