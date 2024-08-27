import { RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState } from '../constants/common.entities';
import { RouterStateUrl } from './router.state';
export declare const reducers: ActionReducerMap<AppState>;
export declare const metaReducers: MetaReducer<AppState>[];
export declare const selectAuthState: import("@ngrx/store").MemoizedSelector<object, AuthState, import("@ngrx/store").DefaultProjectorFn<AuthState>>;
export declare const selectRouterState: import("@ngrx/store").MemoizedSelector<object, RouterReducerState<RouterStateUrl>, import("@ngrx/store").DefaultProjectorFn<RouterReducerState<RouterStateUrl>>>;
export interface AppState {
    auth: AuthState;
    router: RouterReducerState<RouterStateUrl>;
}
export interface State extends AppState {
    app: AppState;
}
