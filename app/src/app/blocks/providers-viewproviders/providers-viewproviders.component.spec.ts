import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersViewprovidersComponent } from './providers-viewproviders.component';

describe('ProvidersViewprovidersComponent', () => {
  let component: ProvidersViewprovidersComponent;
  let fixture: ComponentFixture<ProvidersViewprovidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersViewprovidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersViewprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
