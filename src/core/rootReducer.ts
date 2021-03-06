import {combineReducers} from 'redux';

import {bills, BillsState} from 'core/bills';
import {globalReducer, GlobalState} from 'core/global';
import {pendencies, PendenciesState} from 'core/pendencies';
import {user, UserState} from 'core/user';

export type RootState = {
  global: GlobalState;
  user: UserState;
  bills: BillsState;
  pendencies: PendenciesState;
};

export const rootReducer = combineReducers<RootState>({
  global: globalReducer,
  user,
  bills,
  pendencies,
});
