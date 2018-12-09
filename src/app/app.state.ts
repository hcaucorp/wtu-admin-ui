import { WalletsState } from './wallets/wallets.state';

export interface AppState {
  readonly walletsState: WalletsState;
}