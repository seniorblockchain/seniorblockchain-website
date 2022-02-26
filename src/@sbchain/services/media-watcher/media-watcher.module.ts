import { NgModule } from '@angular/core';
import { SBChainMediaWatcherService } from '@sbchain/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        SBChainMediaWatcherService
    ]
})
export class SBChainMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _sbchainMediaWatcherService: SBChainMediaWatcherService)
    {
    }
}
