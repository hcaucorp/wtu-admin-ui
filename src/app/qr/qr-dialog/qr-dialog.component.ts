import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface QrPayload {
  qrData: string;
}

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrls: ['./qr-dialog.component.less']
})
export class QrComponent {

  qrData: string;

  constructor(
    public dialogRef: MatDialogRef<QrComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: QrPayload) {
      this.qrData = this.payload.qrData;
    }
}
