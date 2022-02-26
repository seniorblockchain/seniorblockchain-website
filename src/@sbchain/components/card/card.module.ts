import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBChainCardComponent } from '@sbchain/components/card/card.component';

@NgModule({
    declarations: [
        SBChainCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        SBChainCardComponent
    ]
})
export class SBChainCardModule
{
}
