import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBChainHighlightComponent } from '@sbchain/components/highlight/highlight.component';

@NgModule({
    declarations: [
        SBChainHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        SBChainHighlightComponent
    ]
})
export class SBChainHighlightModule
{
}
