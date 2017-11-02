import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutPart2Component } from './tut-part-2.component';

describe('TutPart2Component', () => {
  let component: TutPart2Component;
  let fixture: ComponentFixture<TutPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
