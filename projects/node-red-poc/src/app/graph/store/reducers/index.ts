import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromGraphs from './graph.reducer';

export interface GraphProductState {
  graph: fromGraphs.GraphState;
}

export const reducers: ActionReducerMap<GraphProductState> = {
  graph: fromGraphs.graphStateReducer
};

export const getGraphProductStateSelector = createFeatureSelector<GraphProductState>(
  'graphProduct'
);
