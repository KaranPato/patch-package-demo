import { Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TreeAnimateOpenDirective {
    private renderer;
    private templateRef;
    private viewContainerRef;
    private _isOpen;
    animateSpeed: number;
    animateAcceleration: number;
    isEnabled: boolean;
    set isOpen(value: boolean);
    private innerElement;
    constructor(renderer: Renderer2, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    private _show;
    private _hide;
    private _animateOpen;
    private _animateClose;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeAnimateOpenDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TreeAnimateOpenDirective, "[treeAnimateOpen]", never, { "isOpen": "treeAnimateOpen"; "animateSpeed": "treeAnimateOpenSpeed"; "animateAcceleration": "treeAnimateOpenAcceleration"; "isEnabled": "treeAnimateOpenEnabled"; }, {}, never, never, false>;
}

//# sourceMappingURL=tree-animate-open.directive.d.ts.map