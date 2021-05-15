import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDocumentTitleComponent } from './set-document-title.component';

describe('SetDocumentTitleComponent', () => {
  let component: SetDocumentTitleComponent;
  let fixture: ComponentFixture<SetDocumentTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDocumentTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDocumentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
