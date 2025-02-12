import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseMapControlComponent } from './enterprise-map-control.component';

describe('EnterpriseMapControlComponent', () => {
  let component: EnterpriseMapControlComponent;
  let fixture: ComponentFixture<EnterpriseMapControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseMapControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseMapControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
