import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DummyComponent } from './dummy/dummy.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,children:[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DasboardComponent},
  {path:'dummy',component:DummyComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
