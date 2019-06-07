import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionSuccessComponent } from './redemption-success.component';

describe('RedemptionSuccessComponent', () => {
  let component: RedemptionSuccessComponent;
  let fixture: ComponentFixture<RedemptionSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemptionSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemptionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to / if no redemption info present in the model', () => {

  });

});
