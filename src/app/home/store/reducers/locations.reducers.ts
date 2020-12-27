import * as fromLocations from '../actions/locations.actions';
import { ILocation } from 'src/app/models/locations.model';

export interface ILocationState {
    data: ILocation[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: ILocationState = {
    data: [],
    loaded: false,
    loading: false,
};

export function reducer(
    state = initialState,
    action: fromLocations.LocationAction
): ILocationState {
    switch (action.type) {
        case fromLocations.LOAD_lOCATIONS: {
            return {
                ...state,
                loading: true,
            };
        }

        case fromLocations.LOAD_lOCATIONS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }

        case fromLocations.LOAD_lOCATIONS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }

        default: {
            return state;
        }
    }
}

export const getLocationsLoading = (state: ILocationState) => state.loading;
export const getLocationsLoaded = (state: ILocationState) => state.loaded;
export const getLocations = (state: ILocationState) => state.data;
