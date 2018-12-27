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
      walletAddress: ['', [Validators.required, Validators.minLength(12)]]
    });
  }

  onSubmit() {
    const baseUrl = `/api/vouchers`;
    return this.http.post<RedemptionResponse>(baseUrl, this.form.value)
      .subscribe(
        response => {
          this.snackBar.open(this.toMessage(response), ':)');
          this.form.disable();
        },
        (error: HttpErrorResponse) => {
          this.snackBar.open(error.message, ':(');
          this.form.disable();
        }
      );
  }

  toMessage(response: RedemptionResponse): string {
    return `Your voucher has been redeemed. Your confirmation number is: "${response.transactionId}". ` +
      `You will also receive it via email. You can track your topup on one of links provided below:\n` +
      response.trackingUrls.reduce((a, b) => `${a}\n${b}`);
  }
}
