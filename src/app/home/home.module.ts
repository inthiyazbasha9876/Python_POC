import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, DasboardComponent, DummyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
