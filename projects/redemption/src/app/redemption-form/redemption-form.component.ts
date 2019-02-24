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

  constructor(private http: HttpClient,
    private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      voucherCode: ['', [Validators.required, Validators.minLength(12)]],
      destinationAddress: ['', [Validators.required, Validators.minLength(12)]]
    });
  }

  onSubmit() {
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
            this.snackBar.open('Fe coudn\'t redeem your voucher. Our staff has been notified about this ' +
              'error and will reach out to you if needed. Please contact us if you have any questions.', 'Close');
          }
          this.form.disable();
        }
      );
  }

  toMessage(response: RedemptionResponse): string {
    return `Your voucher has been redeemed. Your confirmation number is: "${response.transactionId}". ` +
      `You will also receive it via email. You can track your topup in your favourite blockchain explorer. We like these ones:\n` +
      response.trackingUrls.reduce((a, b) => `${a}\n${b}`);
  }
}
