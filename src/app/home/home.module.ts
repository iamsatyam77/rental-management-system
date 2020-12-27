import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('home', reducers, { metaReducers }),
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
