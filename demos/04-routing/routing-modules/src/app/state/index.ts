import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { customerReducer, CustomersState } from '../customers/state/customers.reducer';

// State
export interface State {
  customers: CustomersState;
}

export const reducers: ActionReducerMap<State> = {
  customers: customerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
