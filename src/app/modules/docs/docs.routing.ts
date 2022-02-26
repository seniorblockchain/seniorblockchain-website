import { Route } from '@angular/router';
import { DocsComponent } from 'app/modules/docs/docs.component';
import { DocsListComponent } from 'app/modules/docs/list/list.component';
import { DocsDetailsComponent } from 'app/modules/docs/details/details.component';
import { DocsCategoriesResolver, DocsCourseResolver, DocsCoursesResolver } from 'app/modules/docs/docs.resolvers';

export const docsRoutes: Route[] = [
    {
        path     : '',
        component: DocsComponent,
        resolve  : {
            categories: DocsCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: DocsListComponent,
                resolve  : {
                    courses: DocsCoursesResolver
                }
            },
            {
                path     : ':id',
                component: DocsDetailsComponent,
                resolve  : {
                    course: DocsCourseResolver
                }
            }
        ]
    }
];
