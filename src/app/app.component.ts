import { Component, OnInit } from '@angular/core';
import { ILocation } from './models/locations.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './home/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RENTAL MANAGEMENT SYSTEM';

  locations$: Observable<ILocation[]>;

  constructor(
    private store: Store<fromStore.LocationState>,
  ) { }

  ngOnInit(): void {
    this.locations$ = this.store.select<any>(fromStore.getAllLocations);
    this.store.dispatch(new fromStore.LoadLocations());
  }
}
