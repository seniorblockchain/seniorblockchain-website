/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
    selector: 'chains',
    templateUrl: './chains.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ChainsComponent {
    options: AnimationOptions = {
        path: '/assets/animations/chains.json',
    };

    animationCreated(animationItem: AnimationItem): void {
     }

    /**
     * Constructor
     */
    constructor() {
    }
}
