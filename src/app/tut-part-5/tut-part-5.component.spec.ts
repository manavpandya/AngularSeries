import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutPart5Component } from './tut-part-5.component';

describe('TutPart5Component', () => {
  let component: TutPart5Component;
  let fixture: ComponentFixture<TutPart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutPart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutPart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
