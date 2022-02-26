import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SBChainConfirmationModule } from '@sbchain/services/confirmation';
import { SBChainLoadingModule } from '@sbchain/services/loading';
import { SBChainMediaWatcherModule } from '@sbchain/services/media-watcher/media-watcher.module';
import { SBChainSplashScreenModule } from '@sbchain/services/splash-screen/splash-screen.module';
import { SBChainUtilsModule } from '@sbchain/services/utils/utils.module';

@NgModule({
    imports  : [
        SBChainConfirmationModule,
        SBChainLoadingModule,
        SBChainMediaWatcherModule,
        SBChainSplashScreenModule,
        SBChainUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class SBChainModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: SBChainModule)
    {
        if ( parentModule )
        {
            throw new Error('SBChainModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
