import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GraphState } from '../../store/reducers/graph.reducer';
import { getGraphStateSelector } from '../../store/selectors/graph.selectors';
import { updateGraphDefinitionAction } from '../../store/actions/graph.actions';
import { Subscription } from 'rxjs';
import { GraphProductState } from '../../store/reducers';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-mermaid-editor',
  template: `
    <app-test-flow-editor
      fxFlex="35%"
      [@openCloseLeft]="toggleNodeSideNav"
      class="mat-elevation-z2"
      [graphDefinition]="graphDefinition"
      (editorOnChange)="handleEditorChange($event)"
    >
    </app-test-flow-editor>
    <app-svg-panel
      [@openCloseLeft]="toggleNodeSideNav"
      [svgError]="svgError"
      fxFlex="70%"
    ></app-svg-panel>
    <div @openClose *ngIf="toggleNodeSideNav" fxLayout="column" fxFlex="25%">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./mermaid-editor.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ transform: 'translateX(0)' }),
        animate('250ms ease-out', style({ transform: 'translateX(-2%)' })),
      ]),
      transition(':leave', [
        animate('250ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('openCloseLeft', [
      state('true', style({ transform: 'translateX(-0.2%)' })),
      state('false', style({ transform: 'translateX(0%)' })),
      transition('false <=> true', animate(250)),
    ]),
  ],
})
export class MermaidEditorComponent implements OnInit, OnDestroy {
  svgCode: string;
  svgError: string;
  graphDefinition: string;
  toggleNodeSideNav = false;

  private graphSvgCode$ = this.store.pipe(select(getGraphStateSelector));
  private subscription: Subscription;

  constructor(
    private store: Store<GraphProductState>,
    private element: ElementRef
  ) {
    console.log('init');
    this.handleEditorChange(`graph TD
    LaunchApplication -->|ready| EnterMultipleValues(EnterMultipleValues)
    click LaunchApplication callback "Tooltip for a callback"
    EnterMultipleValues --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`);
  }

  ngOnInit() {
    const element = this.element.nativeElement.querySelector('#graphDiv');
    this.subscription = this.graphSvgCode$.subscribe(
      (graphState: GraphState) => {
        const {
          svgCode,
          bindFunctions,
          svgError,
          graphDefinition,
          clickedNodeId,
        } = graphState;
        if (!!svgCode) {
          element.innerHTML = svgCode;
        }
        if (!!bindFunctions) {
          bindFunctions();
        }
        this.svgError = svgError && svgError.str;
        this.graphDefinition = graphDefinition;
        this.toggleNodeSideNav = !!clickedNodeId;
      }
    );
  }

  handleEditorChange(text) {
    this.store.dispatch(
      updateGraphDefinitionAction({
        graphDefinition: text,
        graphEl: 'graphEl',
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
