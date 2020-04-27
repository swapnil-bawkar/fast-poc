import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-flow-editor-errors',
  template: `
    <mat-expansion-panel [expanded]="!!svgError">
      <mat-expansion-panel-header>
        <mat-panel-title [style.color]="!!svgError ? 'red' : 'inherit'">
          Graph Error Console
        </mat-panel-title>
      </mat-expansion-panel-header>
      <p>{{svgError}}</p>
    </mat-expansion-panel>
  `
})
export class GraphErrorComponent {
  @Input()
  svgError = '';
}
