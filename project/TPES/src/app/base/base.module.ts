import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {BaseRoutingModule} from './base-routing.module';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { BaseComponent } from './components/pages/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BaseRoutingModule
  ],
  declarations: [NavbarComponent, HomeComponent, NotFoundComponent, BaseComponent]
})
export class BaseModule { }
