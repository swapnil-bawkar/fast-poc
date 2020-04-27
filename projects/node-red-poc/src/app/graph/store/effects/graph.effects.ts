import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MermaidService } from '../../services/mermaid/mermaid.service';
import { handleGraphDefinitionUpdateEffect } from './graph-definition/handleGraphDefinitionUpdateEffect';
import { Router } from '@angular/router';
import { handleGraphNodeFormSaveEffect } from './graph-node-save/graphNodeSaveFormEffect';

@Injectable()
export class GraphEffect {
  constructor(
    private actions$: Actions,
    private mermaidService: MermaidService,
    private router: Router
  ) {}

  updateGraphDefinitionEffect$ = createEffect(() =>
    handleGraphDefinitionUpdateEffect(this.actions$, this.mermaidService)
  );

  graphNodeSaveEffect$ = createEffect(() =>
    handleGraphNodeFormSaveEffect(this.actions$, this.router)
  );
}
