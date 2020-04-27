import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GraphProductState } from '../../store/reducers';
import { graphNodeFormSaveAction } from '../../store/actions/graph.actions';
import { LaunchApplicationFormService } from './launch-application-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-launch-application',
  template: `
    <form fxFlex [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-card fxFlex fxLayout="column">
        <mat-card-header>
          <mat-card-title>Launch Application</mat-card-title>
        </mat-card-header>

        <mat-card-content fxFlex>
          <mat-divider></mat-divider>
          <h3><mat-icon>settings </mat-icon>Properties</h3>
          <mat-form-field>
            <mat-label>URL</mat-label>
            <input
              matInput
              placeholder="https://www.google.com/"
              formControlName="url"
            />
          </mat-form-field>
        </mat-card-content>

        <app-form-action [disabled]="form.invalid"></app-form-action>
      </mat-card>
    </form>
  `,
  styleUrls: ['./launch-application.component.scss'],
  providers: [LaunchApplicationFormService],
})
export class LaunchApplicationComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(
    private store: Store<GraphProductState>,
    private launchApplicationFormService: LaunchApplicationFormService
  ) {}

  ngOnInit(): void {
    this.form = this.launchApplicationFormService.createForm();
  }

  onSubmit() {
    this.store.dispatch(
      graphNodeFormSaveAction({
        nodeId: 'LaunchApplication',
      })
    );
  }

  handleCancelClick() {
    this.store.dispatch(
      graphNodeFormSaveAction({
        nodeId: 'LaunchApplication',
      })
    );
  }

  ngOnDestroy(): void {}
}
