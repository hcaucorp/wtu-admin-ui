import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionFormComponent } from './redemption-form.component';

describe('RedemptionFormComponent', () => {
  let component: RedemptionFormComponent;
  let fixture: ComponentFixture<RedemptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RedemptionFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sent redemption request when form submitted', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.button-up');

  });

  it('should request voucher info after typing in the code', () => {

  });

  it('should display valid message if voucher info status is valid', () => {

  });

  it('should display "expired" message if voucher info status is "expired"', () => {

  });

  it('should display "invalid voucher" message if voucher info response is errorish', () => {

  });

  it('should display "redeemed" message if voucher info response is "redeemed"', () => {

  });

  it('should display "required" validation error if voucher code is empty', () => {

  });

  it('should diplay "invalid voucher" message if voucher code doesn`t match standard format (regexp)', () => {

  });

  it('should navigate to "success" page after sucessful redemption', () => {

  });

  it ('should navigate to "fail" page after failed redemption', () => {

  });

  it('should reset model data after failed redemption', () => {

  });

  it('should reset model except redemption info after successful redemption', () => {

  });

  class PageObjects {
    voucherCodeInput = 'voucherCodeInput';
    addressInput = 'addressInput';
    sendToButton = 'sendToButton';
  }
});
