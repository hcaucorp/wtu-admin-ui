import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RedemptionResponse } from './redemption-form.model';

@Component({
  selector: 'app-redemption-form',
  templateUrl: './redemption-form.component.html',
  styleUrls: ['./redemption-form.component.css']
})
export class RedemptionFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private http: HttpClient,
    private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      voucherCode: ['', [Validators.required, Validators.minLength(12)]],
      destinationAddress: ['', [Validators.required, Validators.minLength(12)]],
      currency: 'BTC'
    });
  }

  onSubmit() {
    this.submitted = true;

    return this.http.post<RedemptionResponse>(`/api/vouchers/redeem`, this.form.value)
      .subscribe(
        response => {
          this.snackBar.open(this.toMessage(response), 'Success');
          this.form.disable();
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.snackBar.open(error.message, 'Close');
          } if (error.status === 404) {
            this.snackBar.open('Your voucher code is not valid.', 'Close');
          } else {
            this.snackBar.open('Top up failed', 'Close');
          }
          this.form.disable();
        }
      );
  }

  toMessage(response: RedemptionResponse): string {
    return `We've sent your top up to address provided! Please check your wallet app!`;
  }
}
