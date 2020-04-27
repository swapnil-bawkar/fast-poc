import { Actions, ofType } from '@ngrx/effects';
import {
  updateGraphDefinitionAction,
} from '../../actions/graph.actions';
import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { MermaidService } from '../../../services/mermaid/mermaid.service';

function handleGraphDefinitionUpdateEffect(
  actions$: Actions,
  mermaidService: MermaidService
): Observable<Action> {
  return actions$.pipe(
    ofType(updateGraphDefinitionAction),
    flatMap((action) => {
      const { graphDefinition, graphEl } = action;
      return mermaidService.drawGraph(graphEl, graphDefinition);
    })
  );
}

export { handleGraphDefinitionUpdateEffect };
