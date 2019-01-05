import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersDeleteComponent } from './vouchers-delete.component';

describe('VouchersDeleteComponent', () => {
  let component: VouchersDeleteComponent;
  let fixture: ComponentFixture<VouchersDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
