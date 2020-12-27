import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs/internal/observable/of";

import { catchError, map, switchMap } from 'rxjs/operators';
import { LocationService } from "src/app/home/services/location.service";
import * as locationActions from '../actions';

@Injectable()
export class LocationsEffects {
    constructor(private actions$: Actions, private locationService: LocationService) { }

    @Effect()
    loadLocations$ = this.actions$.pipe(
        ofType(locationActions.LOAD_lOCATIONS),
        switchMap(() => {
            return this.locationService.getLocations$().pipe(
                map((res) => new locationActions.LoadLocationsPass(res.data.locations)),
                catchError(error => of(new locationActions.LoadLocationsFail(error)))
            )
        })
    )
}