import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SBChainConfirmationService } from '@sbchain/services/confirmation/confirmation.service';
import { SBChainConfirmationDialogComponent } from '@sbchain/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SBChainConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        SBChainConfirmationService
    ]
})
export class SBChainConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _sbchainConfirmationService: SBChainConfirmationService)
    {
    }
}
