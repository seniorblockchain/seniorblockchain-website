import { Component, ElementRef, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { SBChainCardComponent } from '@sbchain/components/card';

@Component({
    selector     : 'node',
    templateUrl  : './node.component.html',
    encapsulation: ViewEncapsulation.None
})
export class NodeComponent
{
    @ViewChildren(SBChainCardComponent, {read: ElementRef}) private _sbchainCards: QueryList<ElementRef>;

    constructor()
    {
    }
}
