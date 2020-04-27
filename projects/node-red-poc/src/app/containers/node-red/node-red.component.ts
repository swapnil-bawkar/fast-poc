import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-node-red',
  template: `
    <iframe fxFlex src="http://localhost:8000/red" class="iframe"></iframe>
  `,
  styleUrls: ['./node-red.component.scss']
})
export class NodeRedComponent {
}
