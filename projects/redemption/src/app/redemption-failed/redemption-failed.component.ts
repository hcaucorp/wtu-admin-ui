import { Component, OnInit } from '@angular/core';
import { RedemptionFormState } from '../redemption-form/redemption-form.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redemption-failed',
  templateUrl: './redemption-failed.component.html',
  styleUrls: ['./redemption-failed.component.css']
})
export class RedemptionFailedComponent implements OnInit {

  private model$: Observable<RedemptionFormState>;

  constructor(store: Store<RedemptionFormState>, private router: Router) {
    this.model$ = store.pipe(select('vouchers'));
  }

  ngOnInit() {
    this.model$.subscribe(model => this.navigateToHomeWhenNoRedemptionInfoPresent(model));
  }

  navigateToHomeWhenNoRedemptionInfoPresent(model: RedemptionFormState) {
    if (!model.redemptionResponse) {
      this.router.navigate(['/']);
    }
  }
}
