import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBChainDrawerComponent } from '@sbchain/components/drawer/drawer.component';

@NgModule({
    declarations: [
        SBChainDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        SBChainDrawerComponent
    ]
})
export class SBChainDrawerModule
{
}
