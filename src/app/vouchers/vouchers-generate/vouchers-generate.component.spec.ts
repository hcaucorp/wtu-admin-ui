import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersGenerateComponent } from './vouchers-generate.component';

describe('VouchersGenerateComponent', () => {
  let component: VouchersGenerateComponent;
  let fixture: ComponentFixture<VouchersGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
