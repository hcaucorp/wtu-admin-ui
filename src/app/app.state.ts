import { WalletModuleState } from './wallets/wallets.state';

export interface AppState {
  readonly walletsState: WalletModuleState;
}
