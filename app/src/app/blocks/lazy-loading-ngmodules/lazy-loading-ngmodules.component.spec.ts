import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingNgmodulesComponent } from './lazy-loading-ngmodules.component';

describe('LazyLoadingNgmodulesComponent', () => {
  let component: LazyLoadingNgmodulesComponent;
  let fixture: ComponentFixture<LazyLoadingNgmodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingNgmodulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingNgmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
