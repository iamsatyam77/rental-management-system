import { Action } from '@ngrx/store';
import { ILocation } from 'src/app/models/locations.model';

export const LOAD_lOCATIONS = '[Catalogs] Load Locations';
export const LOAD_lOCATIONS_FAIL = '[Catalogs] Load Locations Fails';
export const LOAD_lOCATIONS_SUCCESS = '[Catalogs] Load Locations Sucess';

export class LoadLocations implements Action {
    readonly type = LOAD_lOCATIONS;
}

export class LoadLocationsFail implements Action {
    readonly type = LOAD_lOCATIONS_FAIL;

    constructor(public payload: any) { }
}

export class LoadLocationsPass implements Action {
    readonly type = LOAD_lOCATIONS_SUCCESS;

    constructor(public payload: ILocation[]) { }
}

export type LocationAction =
    | LoadLocations
    | LoadLocationsFail
    | LoadLocationsPass;
