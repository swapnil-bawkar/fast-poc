import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-action',
  template: `
    <mat-card-actions>
      <span fxFlex></span>
      <button mat-raised-button (click)="cancel.emit()">CANCEL</button>
      <button
        type="submit"
        [disabled]="disabled"
        mat-raised-button
        color="primary"
      >
        SAVE
      </button>
    </mat-card-actions>
  `,
})
export class FormActionComponent {
  @Input()
  disabled: boolean;
  @Output()
  cancel = new EventEmitter();
}
