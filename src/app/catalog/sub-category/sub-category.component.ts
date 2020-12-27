import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/locations.model';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  category: ICategory;
  constructor(private router: Router) {
    this.category = this.router.getCurrentNavigation().extras.state?.category;
    if (!this.category) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {}
}
