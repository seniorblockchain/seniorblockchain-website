import { NgModule } from '@angular/core';
import { SBChainUtilsService } from '@sbchain/services/utils/utils.service';

@NgModule({
    providers: [
        SBChainUtilsService
    ]
})
export class SBChainUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _sbchainUtilsService: SBChainUtilsService)
    {
    }
}
