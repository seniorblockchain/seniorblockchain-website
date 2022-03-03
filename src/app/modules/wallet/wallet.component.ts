/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
    selector     : 'wallet',
    templateUrl  : './wallet.component.html',
    encapsulation: ViewEncapsulation.None
})
export class WalletComponent
{
    pos: AnimationOptions = {
        path: '/assets/animations/pos.json',
    };
    animationCreated(animationItem: AnimationItem): void {
    }
    /**
     * Constructor
     */
    constructor()
    {
    }
}
