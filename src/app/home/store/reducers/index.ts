import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromLocations from './locations.reducers';

export interface LocationState {
    locations: fromLocations.ILocationState;
}

export const reducers: ActionReducerMap<LocationState> = {
    locations: fromLocations.reducer,
};

export const metaReducers: MetaReducer<LocationState>[] = !environment.production
  ? []
  : [];

export const getAppState = createFeatureSelector<LocationState>('home');

export const getLocationState = createSelector(getAppState, (state: LocationState) => state.locations);
export const getAllLocations = createSelector(getLocationState, fromLocations.getLocations);
export const getLocationsLoaded = createSelector(getLocationState, fromLocations.getLocationsLoaded);
export const getLocationsLoading = createSelector(getLocationState, fromLocations.getLocationsLoading);
