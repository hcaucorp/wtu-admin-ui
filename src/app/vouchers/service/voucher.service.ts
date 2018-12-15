import { GenerateVouchersSpec } from '../actions/voucher.actions';
import { Voucher } from '../model/voucher';
import { Observable, EMPTY } from 'rxjs';

export class VoucherService {

    generateVouchers(spec: GenerateVouchersSpec): Observable<any> {
        return EMPTY;
    }

    getAll(): Observable<Voucher[]> {
        return EMPTY;
    }
}
