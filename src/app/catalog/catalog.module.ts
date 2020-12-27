import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoryRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [CategoryComponent, SubCategoryComponent],
  imports: [CommonModule, CategoryRoutingModule],
})
export class CatalogModule {}
