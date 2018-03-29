import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCompleteComponent } from './lesson-complete.component';

describe('LessonCompleteComponent', () => {
  let component: LessonCompleteComponent;
  let fixture: ComponentFixture<LessonCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
