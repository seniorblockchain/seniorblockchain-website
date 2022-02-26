import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SBChainFullscreenModule } from '@sbchain/components/fullscreen';
import { SBChainLoadingBarModule } from '@sbchain/components/loading-bar';
import { SBChainNavigationModule } from '@sbchain/components/navigation';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';

import { SharedModule } from 'app/shared/shared.module';
import { ModernLayoutComponent } from 'app/layout/layouts/horizontal/modern/modern.component';

@NgModule({
    declarations: [
        ModernLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SBChainFullscreenModule,
        SBChainLoadingBarModule,
        SBChainNavigationModule,
        LanguagesModule,
        NotificationsModule,
        SharedModule
    ],
    exports     : [
        ModernLayoutComponent
    ]
})
export class ModernLayoutModule
{
}
