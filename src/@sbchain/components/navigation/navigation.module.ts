import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SBChainScrollbarModule } from '@sbchain/directives/scrollbar/public-api';
import { SBChainHorizontalNavigationBasicItemComponent } from '@sbchain/components/navigation/horizontal/components/basic/basic.component';
import { SBChainHorizontalNavigationBranchItemComponent } from '@sbchain/components/navigation/horizontal/components/branch/branch.component';
import { SBChainHorizontalNavigationDividerItemComponent } from '@sbchain/components/navigation/horizontal/components/divider/divider.component';
import { SBChainHorizontalNavigationSpacerItemComponent } from '@sbchain/components/navigation/horizontal/components/spacer/spacer.component';
import { SBChainHorizontalNavigationComponent } from '@sbchain/components/navigation/horizontal/horizontal.component';
import { SBChainVerticalNavigationAsideItemComponent } from '@sbchain/components/navigation/vertical/components/aside/aside.component';
import { SBChainVerticalNavigationBasicItemComponent } from '@sbchain/components/navigation/vertical/components/basic/basic.component';
import { SBChainVerticalNavigationCollapsableItemComponent } from '@sbchain/components/navigation/vertical/components/collapsable/collapsable.component';
import { SBChainVerticalNavigationDividerItemComponent } from '@sbchain/components/navigation/vertical/components/divider/divider.component';
import { SBChainVerticalNavigationGroupItemComponent } from '@sbchain/components/navigation/vertical/components/group/group.component';
import { SBChainVerticalNavigationSpacerItemComponent } from '@sbchain/components/navigation/vertical/components/spacer/spacer.component';
import { SBChainVerticalNavigationComponent } from '@sbchain/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        SBChainHorizontalNavigationBasicItemComponent,
        SBChainHorizontalNavigationBranchItemComponent,
        SBChainHorizontalNavigationDividerItemComponent,
        SBChainHorizontalNavigationSpacerItemComponent,
        SBChainHorizontalNavigationComponent,
        SBChainVerticalNavigationAsideItemComponent,
        SBChainVerticalNavigationBasicItemComponent,
        SBChainVerticalNavigationCollapsableItemComponent,
        SBChainVerticalNavigationDividerItemComponent,
        SBChainVerticalNavigationGroupItemComponent,
        SBChainVerticalNavigationSpacerItemComponent,
        SBChainVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        SBChainScrollbarModule
    ],
    exports     : [
        SBChainHorizontalNavigationComponent,
        SBChainVerticalNavigationComponent
    ]
})
export class SBChainNavigationModule
{
}
