import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
import * as ɵngcc0 from '@angular/core';
export declare class TreeDropDirective implements AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private treeDraggedElement;
    private ngZone;
    allowDragoverStyling: boolean;
    onDropCallback: EventEmitter<any>;
    onDragOverCallback: EventEmitter<any>;
    onDragLeaveCallback: EventEmitter<any>;
    onDragEnterCallback: EventEmitter<any>;
    private readonly dragOverEventHandler;
    private readonly dragEnterEventHandler;
    private readonly dragLeaveEventHandler;
    private _allowDrop;
    set treeAllowDrop(allowDrop: any);
    allowDrop($event: any): boolean;
    constructor(el: ElementRef, renderer: Renderer2, treeDraggedElement: TreeDraggedElement, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDragOver($event: any): void;
    onDragEnter($event: any): void;
    onDragLeave($event: any): void;
    onDrop($event: any): void;
    private addClass;
    private removeClass;
    private addDisabledClass;
    private removeDisabledClass;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeDropDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TreeDropDirective, "[treeDrop]", never, { "allowDragoverStyling": "allowDragoverStyling"; "treeAllowDrop": "treeAllowDrop"; }, { "onDropCallback": "treeDrop"; "onDragOverCallback": "treeDropDragOver"; "onDragLeaveCallback": "treeDropDragLeave"; "onDragEnterCallback": "treeDropDragEnter"; }, never, never, false>;
}

//# sourceMappingURL=tree-drop.directive.d.ts.map