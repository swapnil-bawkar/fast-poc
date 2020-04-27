import { createAction, props } from '@ngrx/store';

export interface UpdateGraphModel {
  graphDefinition: string;
  graphEl: string;
}
export const updateGraphDefinitionAction = createAction(
  '[GRAPH] Update Graph Definition',
  props<UpdateGraphModel>()
);

export interface UpdateGraphSvgModel {
  svgCode: string;
  bindFunctions: any;
  svgError: any;
}
export const updateGraphSvgAction = createAction(
  '[GRAPH] Update Graph Svg',
  props<UpdateGraphSvgModel>()
);

export interface GraphNodeClickModel {
  nodeId: string;
}
export const graphNodeClickAction = createAction(
  '[GRAPH] Graph Node Click',
  props<GraphNodeClickModel>()
);

export interface GraphNodeFormSaveModel {
  nodeId: string;
}
export const graphNodeFormSaveAction = createAction(
  '[GRAPH] Graph Node Form Save',
  props<GraphNodeFormSaveModel>()
);
