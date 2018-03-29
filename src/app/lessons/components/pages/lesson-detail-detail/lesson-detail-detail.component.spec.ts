import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailDetailComponent } from './lesson-detail-detail.component';

describe('LessonDetailDetailComponent', () => {
  let component: LessonDetailDetailComponent;
  let fixture: ComponentFixture<LessonDetailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDetailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
