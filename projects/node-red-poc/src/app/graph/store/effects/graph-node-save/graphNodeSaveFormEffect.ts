import { Actions, ofType } from '@ngrx/effects';
import {
  graphNodeFormSaveAction,
  graphNodeClickAction,
} from '../../actions/graph.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

function handleGraphNodeFormSaveEffect(
  actions$: Actions,
  router: Router
): Observable<Action> {
  return actions$.pipe(
    ofType(graphNodeFormSaveAction),
    map((action) => {
      router.navigate(['/graph-editor']);
      return graphNodeClickAction({
        nodeId: '',
      });
    })
  );
}

export { handleGraphNodeFormSaveEffect };
