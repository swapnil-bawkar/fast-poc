import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { MaterialModule } from '../material/material.module';
import { CONTAINERS } from './containers';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { GraphEffect } from './store/effects/graph.effects';
import { LaunchApplicationComponent } from './containers/launch-application/launch-application.component';
import { MermaidEditorComponent } from './containers/mermaid-editor/mermaid-editor.component';

const route: Route[] = [
  {
    path: '',
    component: MermaidEditorComponent,
    children: [
      {
        path: 'LaunchApplication',
        component: LaunchApplicationComponent,
      },
    ],
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
    StoreModule.forFeature('graphProduct', reducers),
    EffectsModule.forFeature([GraphEffect]),
  ],
})
export class GraphModule {}
