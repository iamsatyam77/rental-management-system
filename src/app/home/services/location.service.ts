import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBranch, ILocation, IResponse } from '../../models/locations.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private selectedBranch = new Subject<IBranch>();

  constructor(private http: HttpClient) { }

  getLocations$(): Observable<IResponse> {
    return this.http.get<IResponse>('./assets/catalog.json')
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  setSelectedBranch(branch: IBranch) {
    this.selectedBranch.next(branch);
  }

  getSelectedBranch$(): Observable<IBranch> {
    return this.selectedBranch.asObservable();
  }
}
