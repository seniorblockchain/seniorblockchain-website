import { NgModule } from '@angular/core';
import { SBChainSplashScreenService } from '@sbchain/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        SBChainSplashScreenService
    ]
})
export class SBChainSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _sbchainSplashScreenService: SBChainSplashScreenService)
    {
    }
}
