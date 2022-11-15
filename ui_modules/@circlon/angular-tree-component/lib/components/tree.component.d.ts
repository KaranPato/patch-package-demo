import { OnChanges, TemplateRef } from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
import { TreeOptions } from '../models/tree-options.model';
import { ITreeOptions } from '../defs/api';
import { TreeViewportComponent } from './tree-viewport.component';
import * as ɵngcc0 from '@angular/core';
export declare class TreeComponent implements OnChanges {
    treeModel: TreeModel;
    treeDraggedElement: TreeDraggedElement;
    _nodes: any[];
    _options: TreeOptions;
    loadingTemplate: TemplateRef<any>;
    treeNodeTemplate: TemplateRef<any>;
    treeNodeWrapperTemplate: TemplateRef<any>;
    treeNodeFullTemplate: TemplateRef<any>;
    viewportComponent: TreeViewportComponent;
    set nodes(nodes: any[]);
    set options(options: ITreeOptions);
    set focused(value: boolean);
    set state(state: any);
    toggleExpanded: any;
    activate: any;
    deactivate: any;
    nodeActivate: any;
    nodeDeactivate: any;
    select: any;
    deselect: any;
    focus: any;
    blur: any;
    updateData: any;
    initialized: any;
    moveNode: any;
    copyNode: any;
    loadNodeChildren: any;
    changeFilter: any;
    event: any;
    stateChange: any;
    constructor(treeModel: TreeModel, treeDraggedElement: TreeDraggedElement);
    onKeydown($event: any): void;
    onMousedown($event: any): void;
    ngOnChanges(changes: any): void;
    sizeChanged(): void;
    private pick;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TreeComponent, "Tree, tree-root", never, { "nodes": "nodes"; "options": "options"; "focused": "focused"; "state": "state"; }, { "toggleExpanded": "toggleExpanded"; "activate": "activate"; "deactivate": "deactivate"; "nodeActivate": "nodeActivate"; "nodeDeactivate": "nodeDeactivate"; "select": "select"; "deselect": "deselect"; "focus": "focus"; "blur": "blur"; "updateData": "updateData"; "initialized": "initialized"; "moveNode": "moveNode"; "copyNode": "copyNode"; "loadNodeChildren": "loadNodeChildren"; "changeFilter": "changeFilter"; "event": "event"; "stateChange": "stateChange"; }, ["loadingTemplate", "treeNodeTemplate", "treeNodeWrapperTemplate", "treeNodeFullTemplate"], never, false>;
}

//# sourceMappingURL=tree.component.d.ts.map