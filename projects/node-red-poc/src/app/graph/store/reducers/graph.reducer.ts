import { createReducer, on } from '@ngrx/store';
import {
  UpdateGraphModel,
  UpdateGraphSvgModel,
  updateGraphDefinitionAction,
  updateGraphSvgAction,
  graphNodeClickAction,
  GraphNodeClickModel,
} from '../actions/graph.actions';

export interface GraphState {
  graphDefinition: string;
  graphErrors?: any;
  svgCode: any;
  bindFunctions?: any;
  svgError: any;
  clickedNodeId: string;
  nodes: Node[];
}

export interface Node {
  key: number;
  text: string;
  type: string;
  linkTo: number;
}

export const initialState: GraphState = {
  graphDefinition: '',
  svgCode: null,
  bindFunctions: null,
  svgError: null,
  clickedNodeId: null,
  nodes: [],
};

const _graphStateReducer = createReducer(
  initialState,
  on(updateGraphDefinitionAction, (state, action: UpdateGraphModel) => ({
    ...state,
    graphDefinition: action.graphDefinition,
  })),
  on(updateGraphSvgAction, (state, action: UpdateGraphSvgModel) => ({
    ...state,
    ...action,
  })),
  on(graphNodeClickAction, (state, action: GraphNodeClickModel) => ({
    ...state,
    clickedNodeId: action.nodeId,
  }))
);

export function graphStateReducer(state, action) {
  return _graphStateReducer(state, action);
}
