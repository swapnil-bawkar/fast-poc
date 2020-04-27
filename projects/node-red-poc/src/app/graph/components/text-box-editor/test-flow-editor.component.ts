import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-test-flow-editor',
  template: `
    <mat-card fxFlex fxLayout="column">
      <mat-card-header>
        <mat-card-title>Flow Editor</mat-card-title>
      </mat-card-header>
      <mat-card-content fxFlex>
        <div fxFlex fxLayout="row" class="editor-wrapper">
          <textarea
            fxFlex
            matInput
            placeholder=""
            [ngModel]="graphDefinition"
            (ngModelChange)="handleTextChange($event)"
          >
          </textarea>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./test-flow-editor.component.scss'],
})
export class TestFlowEditorComponent implements OnInit, OnDestroy {
  @Input()
  graphDefinition = '';
  @Output()
  editorOnChange = new EventEmitter<string>();

  private subject = new Subject();
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.subject
      .pipe(debounceTime(500))
      .subscribe((text: string) => {
        this.editorOnChange.emit(text);
      });
  }

  handleTextChange(text) {
    this.subject.next(text);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.subscription.unsubscribe();
  }
}
