import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalDependencyInjectionComponent } from './hierarchical-dependency-injection.component';

describe('HierarchicalDependencyInjectionComponent', () => {
  let component: HierarchicalDependencyInjectionComponent;
  let fixture: ComponentFixture<HierarchicalDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchicalDependencyInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
