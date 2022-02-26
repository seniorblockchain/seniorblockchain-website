/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { FAQComponent } from './faq.component';




const exampleRoutes: Route[] = [
    {
        path     : '',
        component: FAQComponent
    }
];

@NgModule({
    declarations: [
        FAQComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
    ]

})
export class FAQModule
{
}
