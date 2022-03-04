import { WhitePaperModule } from './modules/whitepaper/whitepaper.module';
import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // about
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'about', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule) },
        ]
    },

    // wallet
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'wallet', loadChildren: () => import('app/modules/wallet/wallet.module').then(m => m.WalletModule) },
        ]
    },

    // Home
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule) },
        ]
    },

    // whitepaper
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'whitepaper', loadChildren: () => import('app/modules/whitepaper/whitepaper.module').then(m => m.WhitePaperModule) },
        ]
    },

    // FAQ
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'faq', loadChildren: () => import('app/modules/faq/faq.module').then(m => m.FAQModule) },
        ]
    },
    // Contact
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'contact', loadChildren: () => import('app/modules/contact/contact.module').then(m => m.ContactModule) },
        ]
    },
    // Node
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'node', loadChildren: () => import('app/modules/node/node.module').then(m => m.NodeModule) },
        ]
    },
    // Docs
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'chains', loadChildren: () => import('app/modules/chains/chains.module').then(m => m.ChainsModule) },
        ]
    }


];
