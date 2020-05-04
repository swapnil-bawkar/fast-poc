import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { MaterialModule } from '../material/material.module';
import { CONTAINERS } from './containers';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridDemoComponent } from './containers/grid-demo/grid-demo.component';

const route: Route[] = [
  {
    path: '',
    component: GridDemoComponent,
  },
];

@NgModule({
  declarations: [...CONTAINERS, ...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(route),
    AgGridModule.withComponents([]),
  ],
})
export class AgGridDemoModule {}
