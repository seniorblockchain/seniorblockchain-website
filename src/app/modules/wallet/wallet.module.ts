/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';



const exampleRoutes: Route[] = [
    {
        path     : '',
        component: WalletComponent
    }
];

@NgModule({
    declarations: [
        WalletComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        LottieModule.forRoot({ player: playerFactory }),

    ]

})
export class WalletModule
{
}
export function playerFactory() {
    return player;
  }

