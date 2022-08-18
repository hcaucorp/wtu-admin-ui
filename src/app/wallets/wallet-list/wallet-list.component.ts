import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, window } from 'rxjs/operators';
import { QrComponent } from 'src/app/qr/qr-dialog/qr-dialog.component';
import { LoadWalletsAction } from '../actions/wallet.actions';
import { WalletReport } from '../model/wallet';
import { getWalletsState, WalletsFeatureState } from '../reducers/wallet.reducer';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.less']
})
export class WalletListComponent implements OnInit {

  walletReports$: Observable<WalletReport[]>;
  state$: Observable<WalletsFeatureState>;
  refreshSeconds$: Observable<number>;
  isActive = true;

  constructor(private store: Store<any>,
    private dialog: MatDialog) {
    this.state$ = store.select<WalletsFeatureState>(getWalletsState);
    this.walletReports$ = this.state$.pipe(
      map(state => state.walletReports)
    );
    this.refreshSeconds$ = interval(1000);
  }

  ngOnInit() {
    this.store.dispatch(new LoadWalletsAction());
    this.refreshSeconds$
      .pipe(
        window(interval(60 * 1000)),
        takeWhile(_ => this.isActive)
      )
      .subscribe(_ => {
        this.store.dispatch(new LoadWalletsAction());
      });
  }

  showQR(qrdata: string) {
    this.dialog.open(QrComponent, {
      data: {
        qrData: qrdata
      }
    });
  }
}
