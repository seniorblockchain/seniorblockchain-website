import { Route } from '@angular/router';
import { WhitePaperComponent } from 'app/modules/whitepaper/whitepaper.component';
import { WhitePaperListComponent } from 'app/modules/whitepaper/list/list.component';
import { WhitePaperDetailsComponent } from 'app/modules/whitepaper/details/details.component';
import { WhitePaperCategoriesResolver, WhitePaperCourseResolver, WhitePaperCoursesResolver } from 'app/modules/whitepaper/whitepaper.resolvers';

export const whitepaperRoutes: Route[] = [
    {
        path     : '',
        component: WhitePaperComponent,
        resolve  : {
            categories: WhitePaperCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: WhitePaperListComponent,
                resolve  : {
                    courses: WhitePaperCoursesResolver
                }
            },
            {
                path     : ':id',
                component: WhitePaperDetailsComponent,
                resolve  : {
                    course: WhitePaperCourseResolver
                }
            }
        ]
    }
];
