import { Route } from '@angular/router';
import { FAQComponent } from 'app/modules/faq/faq.component';
import { FAQMostAskedFaqsResolver } from 'app/modules/faq/faq.resolvers';

export const faqRoutes: Route[] = [
    {
        path     : '',
        component: FAQComponent,
        resolve  : {
            faqs: FAQMostAskedFaqsResolver
        }
    }
];
