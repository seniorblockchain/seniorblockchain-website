import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SBChainFindByKeyPipeModule } from '@sbchain/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { whitepaperRoutes } from 'app/modules/whitepaper/whitepaper.routing';
import { WhitePaperComponent } from 'app/modules/whitepaper/whitepaper.component';
import { WhitePaperDetailsComponent } from 'app/modules/whitepaper/details/details.component';
import { WhitePaperListComponent } from 'app/modules/whitepaper/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        WhitePaperComponent,
        WhitePaperDetailsComponent,
        WhitePaperListComponent
    ],
    imports     : [
        RouterModule.forChild(whitepaperRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        SBChainFindByKeyPipeModule,
        SharedModule,
        MatTabsModule
    ]
})
export class WhitePaperModule
{
}
