import { Injectable } from '@angular/core';
import mermaid from 'mermaid';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  updateGraphSvgAction,
  graphNodeClickAction,
} from '../../store/actions/graph.actions';
import { Action, Store } from '@ngrx/store';
import { GraphProductState } from '../../store/reducers';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MermaidService {
  constructor(
    private store: Store<GraphProductState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const config = {
      startOnLoad: true,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'cardinal',
      },
      securityLevel: 'loose',
    };
    mermaid.mermaidAPI.initialize(config);
    window['callback'] = (id) => {
      this.store.dispatch(
        graphNodeClickAction({
          nodeId: id,
        })
      );
      this.router.navigate(['/graph-editor/LaunchApplication']);
    };
  }

  drawGraph(selector: string, graphDefinition: any): Observable<Action> {
    this.createNodes(graphDefinition);
    const subject = new BehaviorSubject<Action>(null);
    try {
      const result = mermaid.parse(graphDefinition);
      mermaid.mermaidAPI.render(
        selector,
        graphDefinition,
        (svgCode: string, bindFunctions) => {
          subject.next(
            updateGraphSvgAction({
              svgCode,
              bindFunctions,
              svgError: null,
            })
          );
        }
      );
    } catch (error) {
      subject.next(
        updateGraphSvgAction({
          svgCode: '',
          bindFunctions: null,
          svgError: error,
        })
      );
    }
    return subject.asObservable();
  }

  createNodes(graphDefinition) {
    const NodeTypeRegex = {
      node: /(\w+)[\[|\(|\>|\{|][\[|\(|\{|\/|\\]*([\w\s])+[\]\)|\}|\/\]|\\\]]+/,
      link: /d/,
    };
    const definitions = graphDefinition.split('\n');
    console.log(definitions);
  }
}
