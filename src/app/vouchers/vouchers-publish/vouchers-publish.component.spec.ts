import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersPublishComponent } from './vouchers-publish.component';

describe('VouchersPublishComponent', () => {
  let component: VouchersPublishComponent;
  let fixture: ComponentFixture<VouchersPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
