import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/pages/home/home.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';

const baseRoutes: Routes = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      baseRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BaseRoutingModule { }
