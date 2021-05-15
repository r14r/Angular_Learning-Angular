import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsStyleGuideComponent } from './docs-style-guide.component';

describe('DocsStyleGuideComponent', () => {
  let component: DocsStyleGuideComponent;
  let fixture: ComponentFixture<DocsStyleGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsStyleGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
