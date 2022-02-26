import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SBChainAlertComponent } from '@sbchain/components/alert/alert.component';

@NgModule({
    declarations: [
        SBChainAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        SBChainAlertComponent
    ]
})
export class SBChainAlertModule
{
}
