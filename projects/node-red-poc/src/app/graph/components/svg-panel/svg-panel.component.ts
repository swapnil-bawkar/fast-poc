import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-panel',
  template: `
    <mat-card fxFlex fxLayout="column">
      <mat-card-header>
        <mat-card-title>Graph</mat-card-title>
      </mat-card-header>
      <mat-card-content fxFlex fxLayout="column">
        <div fxFlex fxLayoutAlign="center center">
          <div id="graphDiv" fxFlex fxLayoutAlign="center center"></div>
        </div>
        <app-test-flow-editor-errors
          [svgError]="svgError"
        ></app-test-flow-editor-errors>
      </mat-card-content>
    </mat-card>
  `,
})
export class SvgPanelComponent {
  @Input()
  svgError: string;
}
