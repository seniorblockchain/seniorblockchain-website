/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SBChainAlertModule } from '@sbchain/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from 'app/modules/home/home.component';
import { homeRoutes } from 'app/modules/home/home.routing';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports     : [
        RouterModule.forChild(homeRoutes),
        LottieModule.forRoot({ player: playerFactory }),
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SBChainAlertModule,
        SharedModule,
    ]
})
export class HomeModule
{
}
export function playerFactory() {
    return player;
  }
