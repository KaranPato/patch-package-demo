import { IActionHandler, IActionMapping, TREE_ACTIONS } from './models/tree-options.model';
import { IAllowDragFn, IAllowDropFn, ITreeOptions, ITreeState } from './defs/api';
import { KEYS } from './constants/keys';
import { TreeModel } from './models/tree.model';
import { TreeNode } from './models/tree-node.model';
import { TreeDraggedElement } from './models/tree-dragged-element.model';
import { TreeVirtualScroll } from './models/tree-virtual-scroll.model';
import { LoadingComponent } from './components/loading.component';
import { TreeComponent } from './components/tree.component';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeContent } from './components/tree-node-content.component';
import { TreeNodeDropSlot } from './components/tree-node-drop-slot.component';
import { TreeNodeExpanderComponent } from './components/tree-node-expander.component';
import { TreeNodeChildrenComponent } from './components/tree-node-children.component';
import { TreeNodeCollectionComponent } from './components/tree-node-collection.component';
import { TreeNodeWrapperComponent } from './components/tree-node-wrapper.component';
import { TreeViewportComponent } from './components/tree-viewport.component';
import { TreeNodeCheckboxComponent } from './components/tree-node-checkbox.component';
import { TreeDropDirective } from './directives/tree-drop.directive';
import { TreeDragDirective } from './directives/tree-drag.directive';
import { TreeAnimateOpenDirective } from './directives/tree-animate-open.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/tree.component';
import * as ɵngcc2 from './components/tree-node.component';
import * as ɵngcc3 from './components/tree-node-content.component';
import * as ɵngcc4 from './components/loading.component';
import * as ɵngcc5 from './directives/tree-drop.directive';
import * as ɵngcc6 from './directives/tree-drag.directive';
import * as ɵngcc7 from './components/tree-node-expander.component';
import * as ɵngcc8 from './components/tree-node-children.component';
import * as ɵngcc9 from './components/tree-node-drop-slot.component';
import * as ɵngcc10 from './components/tree-node-collection.component';
import * as ɵngcc11 from './components/tree-viewport.component';
import * as ɵngcc12 from './components/tree-node-wrapper.component';
import * as ɵngcc13 from './components/tree-node-checkbox.component';
import * as ɵngcc14 from './directives/tree-animate-open.directive';
import * as ɵngcc15 from './mobx-angular/tree-mobx-autorun.directive';
import * as ɵngcc16 from '@angular/common';
export declare class TreeModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<TreeModule, [typeof ɵngcc1.TreeComponent, typeof ɵngcc2.TreeNodeComponent, typeof ɵngcc3.TreeNodeContent, typeof ɵngcc4.LoadingComponent, typeof ɵngcc5.TreeDropDirective, typeof ɵngcc6.TreeDragDirective, typeof ɵngcc7.TreeNodeExpanderComponent, typeof ɵngcc8.TreeNodeChildrenComponent, typeof ɵngcc9.TreeNodeDropSlot, typeof ɵngcc10.TreeNodeCollectionComponent, typeof ɵngcc11.TreeViewportComponent, typeof ɵngcc12.TreeNodeWrapperComponent, typeof ɵngcc13.TreeNodeCheckboxComponent, typeof ɵngcc14.TreeAnimateOpenDirective, typeof ɵngcc15.TreeMobxAutorunDirective], [typeof ɵngcc16.CommonModule], [typeof ɵngcc1.TreeComponent, typeof ɵngcc2.TreeNodeComponent, typeof ɵngcc3.TreeNodeContent, typeof ɵngcc4.LoadingComponent, typeof ɵngcc5.TreeDropDirective, typeof ɵngcc6.TreeDragDirective, typeof ɵngcc7.TreeNodeExpanderComponent, typeof ɵngcc8.TreeNodeChildrenComponent, typeof ɵngcc9.TreeNodeDropSlot, typeof ɵngcc10.TreeNodeCollectionComponent, typeof ɵngcc11.TreeViewportComponent, typeof ɵngcc12.TreeNodeWrapperComponent, typeof ɵngcc13.TreeNodeCheckboxComponent, typeof ɵngcc14.TreeAnimateOpenDirective, typeof ɵngcc15.TreeMobxAutorunDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<TreeModule>;
}
export { TreeModel, TreeNode, TreeDraggedElement, TreeVirtualScroll, ITreeOptions, TREE_ACTIONS, KEYS, IActionMapping, IActionHandler, IAllowDropFn, IAllowDragFn, LoadingComponent, TreeAnimateOpenDirective, TreeComponent, TreeNodeComponent, TreeNodeWrapperComponent, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent, TreeNodeCheckboxComponent, ITreeState };

//# sourceMappingURL=angular-tree-component.module.d.ts.map