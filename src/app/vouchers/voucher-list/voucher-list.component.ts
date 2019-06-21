import { Component, OnInit, ViewChild } from '@angular/core';
import { Voucher } from '../model/voucher';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { VouchersFeatureState, getVouchersState } from '../reducers/voucher.reducer';
import { map } from 'rxjs/operators';
import { LoadVouchersAction, VoucherActionTypes } from '../actions/voucher.actions';
import { MatBottomSheet, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { VouchersDeleteComponent } from '../vouchers-delete/vouchers-delete.component';
import { VouchersPublishComponent } from '../vouchers-publish/vouchers-publish.component';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.less']
})
export class VoucherListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'amount', 'flags', 'sku', 'code'];
  dataSource: MatTableDataSource<Voucher>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  vouchers$: Observable<MatTableDataSource<Voucher>>;

  constructor(
    private store: Store<any>,
    private bottomSheet: MatBottomSheet) {
    this.vouchers$ = store.select<VouchersFeatureState>(getVouchersState)
      .pipe(map(state => new MatTableDataSource(state.vouchers)));

    this.vouchers$.subscribe(vouchers => {
      this.dataSource = vouchers;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadVouchersAction());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openBottomSheet(action: string): void {
    switch (action) {
      case 'd':
        this.bottomSheet.open(VouchersDeleteComponent, {
          data: {
            vouchers$: this.vouchers$.pipe(map(matTableDataSource => matTableDataSource.data))
          }
        });
        break;

      case 'p':
        this.bottomSheet.open(VouchersPublishComponent, {
          data: {
            vouchers$: this.vouchers$.pipe(map(matTableDataSource => matTableDataSource.data)),
            action: VoucherActionTypes.PublishVouchers
          }
        });
        break;

      case 'u':
        this.bottomSheet.open(VouchersPublishComponent, {
          data: {
            vouchers$: this.vouchers$.pipe(map(matTableDataSource => matTableDataSource.data)),
            action: VoucherActionTypes.UnPublishVouchers
          }
        });
        break;
    }
  }
}
