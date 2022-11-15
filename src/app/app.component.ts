import { Component } from '@angular/core';
import { IActionMapping, ITreeOptions, KEYS, TREE_ACTIONS } from '@circlon/angular-tree-component';

const actionMapping: IActionMapping = {
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TreeViewApp';

    nodes = [
      {
        id: 1,
        name: 'root1',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: 'root2',
        children: [
          { id: 5, name: 'child2.1' },
          {
            id: 6,
            name: 'child2.2',
            children: [
              { id: 7, name: 'subsub' }
            ]
          }
        ]
      }
    ];

  options: ITreeOptions = {
    actionMapping
  };
}
