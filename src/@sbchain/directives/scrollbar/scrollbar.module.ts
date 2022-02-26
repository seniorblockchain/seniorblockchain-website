import { NgModule } from '@angular/core';
import { SBChainScrollbarDirective } from '@sbchain/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        SBChainScrollbarDirective
    ],
    exports     : [
        SBChainScrollbarDirective
    ]
})
export class SBChainScrollbarModule
{
}
