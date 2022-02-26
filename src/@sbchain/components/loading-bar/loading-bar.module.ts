import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SBChainLoadingBarComponent } from '@sbchain/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        SBChainLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        SBChainLoadingBarComponent
    ]
})
export class SBChainLoadingBarModule
{
}
