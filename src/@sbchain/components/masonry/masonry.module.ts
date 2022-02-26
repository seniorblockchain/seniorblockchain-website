import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBChainMasonryComponent } from '@sbchain/components/masonry/masonry.component';

@NgModule({
    declarations: [
        SBChainMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        SBChainMasonryComponent
    ]
})
export class SBChainMasonryModule
{
}
