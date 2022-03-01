import { Route } from '@angular/router';
import { HomeComponent } from 'app/modules/home/home.component';
import { HomeMostAskedFaqsResolver } from 'app/modules/home/home.resolvers';

export const homeRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent,
        resolve  : {
            faqs: HomeMostAskedFaqsResolver
        }
    }
];
