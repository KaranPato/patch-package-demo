import { TreeModel } from './tree.model';
import * as ɵngcc0 from '@angular/core';
export declare class TreeVirtualScroll {
    private treeModel;
    private _dispose;
    yBlocks: number;
    x: number;
    viewportHeight: any;
    viewport: any;
    get y(): number;
    get totalHeight(): number;
    constructor(treeModel: TreeModel);
    fireEvent(event: any): void;
    init(): void;
    isEnabled(): boolean;
    private _setYBlocks;
    recalcPositions(): void;
    private _getPositionAfter;
    private _getPositionAfterNode;
    clear(): void;
    setViewport(viewport: any): void;
    scrollIntoView(node: any, force: any, scrollToMiddle?: boolean): void;
    getViewportNodes(nodes: any): any;
    fixScroll(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeVirtualScroll, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<TreeVirtualScroll>;
}

//# sourceMappingURL=tree-virtual-scroll.model.d.ts.map