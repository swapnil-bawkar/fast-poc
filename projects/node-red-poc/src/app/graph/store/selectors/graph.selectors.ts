import { createSelector } from '@ngrx/store';
import { getGraphProductStateSelector, GraphProductState } from '../reducers';
import { GraphState } from '../reducers/graph.reducer';

export const getGraphStateSelector = createSelector(
  getGraphProductStateSelector,
  (state: GraphProductState) => state.graph
);

export const getGraphDefinition = createSelector(
  getGraphStateSelector,
  (state: GraphState) => state.graphDefinition
);

export const getGraphSvgCodeSelector = createSelector(
  getGraphStateSelector,
  (state: GraphState) => state.svgCode,
);
