import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Category, Content } from 'app/modules/whitepaper/whitepaper.types';
import { WhitePaperService } from 'app/modules/whitepaper/whitepaper.service';

@Injectable({
    providedIn: 'root'
})
export class WhitePaperCategoriesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _whitepaperService: WhitePaperService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]>
    {
        return this._whitepaperService.getCategories();
    }
}

@Injectable({
    providedIn: 'root'
})
export class WhitePaperContentsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _whitepaperService: WhitePaperService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content[]>
    {
        return this._whitepaperService.getContents();
    }
}

@Injectable({
    providedIn: 'root'
})
export class WhitePaperContentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _whitepaperService: WhitePaperService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content>
    {
        return this._whitepaperService.getContentById(route.paramMap.get('id'))
                   .pipe(
                       // Error here means the requested task is not available
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');

                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       })
                   );
    }
}
