/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { SBChainCardModule } from '@sbchain/components/card';
import { ChainsComponent } from './chains.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
    return player;
  }

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ChainsComponent
    }
];

@NgModule({
    declarations: [
        ChainsComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        SBChainCardModule,
        LottieModule.forRoot({ player: playerFactory }),

    ]

})
export class ChainsModule
{
}
