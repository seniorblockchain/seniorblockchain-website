/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { SBChainCardModule } from '@sbchain/components/card';
import { SBChainHighlightModule } from '@sbchain/components/highlight';
import { NodeComponent } from './node.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: NodeComponent
    }
];

@NgModule({
    declarations: [
        NodeComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        SBChainCardModule,
        SBChainHighlightModule,
        LottieModule.forRoot({ player: playerFactory }),
    ]

})
export class NodeModule
{
}
export function playerFactory() {
    return player;
}
