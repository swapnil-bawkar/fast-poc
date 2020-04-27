import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeRedComponent } from './containers/node-red/node-red.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

export const routes: any = Object.freeze([
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    iconConfig: { icon: 'dashboard', type: 'icon' },
  },
  {
    path: 'node-red',
    component: NodeRedComponent,
    title: 'NodeRed',
    iconConfig: { icon: 'node-red', type: 'svg' },
  },
  {
    path: 'graph-editor',
    loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule),
    title: 'Mermaid Editor',
    iconConfig: { icon: 'dashboard', type: 'icon' },
  },
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
