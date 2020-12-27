import { Component, OnInit } from '@angular/core';
import {
  IBranch,
  ICategory,
} from '../models/locations.model';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories!: ICategory[];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getSelectedBranch$().subscribe((branch) => {
      this.categories = branch.categories;
    });
  }
}
