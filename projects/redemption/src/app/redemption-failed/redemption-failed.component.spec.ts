import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionFailedComponent } from './redemption-failed.component';

describe('RedemptionFailedComponent', () => {
  let component: RedemptionFailedComponent;
  let fixture: ComponentFixture<RedemptionFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemptionFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemptionFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to / if no redemption info present in the model', () => {

  });
});
