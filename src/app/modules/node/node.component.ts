/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { SBChainCardComponent } from '@sbchain/components/card';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector     : 'node',
    templateUrl  : './node.component.html',
    encapsulation: ViewEncapsulation.None
})
export class NodeComponent
{
    @ViewChildren(SBChainCardComponent, {read: ElementRef}) private _sbchainCards: QueryList<ElementRef>;
    node: AnimationOptions = {
        path: '/assets/animations/blockcore.json',
    };
    animationCreated(animationItem: AnimationItem): void {
    }
    constructor()
    {
    }
}
