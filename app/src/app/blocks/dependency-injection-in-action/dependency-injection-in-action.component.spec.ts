import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionInActionComponent } from './dependency-injection-in-action.component';

describe('DependencyInjectionInActionComponent', () => {
  let component: DependencyInjectionInActionComponent;
  let fixture: ComponentFixture<DependencyInjectionInActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectionInActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
