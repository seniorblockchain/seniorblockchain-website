import { ModuleWithProviders, NgModule } from '@angular/core';
import { SBChainConfigService } from '@sbchain/services/config/config.service';
import { SBCHAIN_APP_CONFIG } from '@sbchain/services/config/config.constants';

@NgModule()
export class SBChainConfigModule
{
    /**
     * Constructor
     */
    constructor(private _sbchainConfigService: SBChainConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<SBChainConfigModule>
    {
        return {
            ngModule : SBChainConfigModule,
            providers: [
                {
                    provide : SBCHAIN_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
