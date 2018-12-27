import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionFormComponent } from './redemption-form.component';

describe('RedemptionFormComponent', () => {
  let component: RedemptionFormComponent;
  let fixture: ComponentFixture<RedemptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemptionFormComponent ]
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
});
