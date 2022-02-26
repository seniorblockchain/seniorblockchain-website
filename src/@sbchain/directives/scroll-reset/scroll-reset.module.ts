import { NgModule } from '@angular/core';
import { SBChainScrollResetDirective } from '@sbchain/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        SBChainScrollResetDirective
    ],
    exports     : [
        SBChainScrollResetDirective
    ]
})
export class SBChainScrollResetModule
{
}
