import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'whitepaper',
    templateUrl    : './whitepaper.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhitePaperComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
