import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../home/store';
import { ICategory, ILocation } from 'src/app/models/locations.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  locations: ILocation[];
  categories!: ICategory[];

  params: any;
  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.store.select(fromStore.getAllLocations).subscribe((locations) => {
      this.locations = locations;
      if (this.params) this.filterCategory(this.params);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.params = params;
      if (this.locations) {
        this.filterCategory(this.params);
      }
    });
  }

  filterCategory(params: { locationId: string; branchId: string }): void {
    if (this.locations) {
      const selectedLocation: ILocation = this.locations.find(
        (i) => i.dealers_id === params.locationId
      );
      if (selectedLocation) {
        const selectedBranch = selectedLocation.branches.find(
          (i) => i.branch_id === params.branchId
        );

        if (selectedBranch) {
          this.categories = selectedBranch.categories;
        }
      }
    }
  }

  selectedCategory(index: number): void {
    this.router.navigate(['sub-category'], {
      // relativeTo: this.activatedRoute,
      state: { category: this.categories[index] },
    });
  }
}
