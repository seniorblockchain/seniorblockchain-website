/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
    options: AnimationOptions = {
        path: '/assets/animations/contact.json',
    };

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

    /**
     * Constructor
     */
    constructor() {
    }
}
