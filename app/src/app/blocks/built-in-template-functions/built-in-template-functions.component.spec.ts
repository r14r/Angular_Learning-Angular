import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInTemplateFunctionsComponent } from './built-in-template-functions.component';

describe('BuiltInTemplateFunctionsComponent', () => {
  let component: BuiltInTemplateFunctionsComponent;
  let fixture: ComponentFixture<BuiltInTemplateFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInTemplateFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInTemplateFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
