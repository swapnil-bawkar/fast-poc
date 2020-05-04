import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-demo',
  template: `
    <ag-grid-angular
      fxLayout="column"
      fxFlex
      class="ag-theme-material"
      [rowData]="rowData"
      [defaultColDef]="defaultColDef"
      [columnDefs]="columnDefs"
      [paginationAutoPageSize]="true"
      [pagination]="true"
      (gridReady)="onGridReady($event)"
    >
    </ag-grid-angular>
  `,
  styleUrls: ['./grid-demo.component.scss'],
})
export class GridDemoComponent {
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    enableValue: true,
    sortable: true,
    filter: true,
  };
  columnDefs = [
    { field: 'athlete' },
    {
      field: 'age',
      maxWidth: 120,
    },
    { field: 'country' },
    {
      field: 'year',
      maxWidth: 120,
    },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];

  private gridApi;
  private gridColumnApi;
  rowData: any[];

  constructor(private http: HttpClient) {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
      )
      .subscribe((data: any[]) => {
        this.rowData = data;
      });
  }
}
