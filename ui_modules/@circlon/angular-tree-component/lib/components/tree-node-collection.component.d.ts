import { OnInit, OnDestroy } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { TreeModel } from '../models/tree.model';
import * as ɵngcc0 from '@angular/core';
export declare class TreeNodeCollectionComponent implements OnInit, OnDestroy {
    get nodes(): any;
    set nodes(nodes: any);
    treeModel: TreeModel;
    _nodes: any;
    private virtualScroll;
    templates: any;
    viewportNodes: TreeNode[];
    get marginTop(): string;
    _dispose: any[];
    setNodes(nodes: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackNode(index: any, node: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeNodeCollectionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TreeNodeCollectionComponent, "tree-node-collection", never, { "nodes": "nodes"; "treeModel": "treeModel"; "templates": "templates"; }, {}, never, never, false>;
}

//# sourceMappingURL=tree-node-collection.component.d.ts.map