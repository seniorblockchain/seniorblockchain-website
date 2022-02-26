import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from 'app/modules/home/home.service';
import { FaqCategory, GuideCategory } from 'app/modules/home/home.type';

@Injectable({
    providedIn: 'root'
})
export class HomeMostAskedFaqsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FaqCategory[]>
    {
        return this._homeService.getFaqsByCategory('most-asked');
    }
}

@Injectable({
    providedIn: 'root'
})
export class HomeFaqsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FaqCategory[]>
    {
        return this._homeService.getAllFaqs();
    }
}

@Injectable({
    providedIn: 'root'
})
export class HomeGuidesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GuideCategory[]>
    {
        return this._homeService.getAllGuides();
    }
}

@Injectable({
    providedIn: 'root'
})
export class HomeGuidesCategoryResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GuideCategory[]>
    {
        return this._homeService.getGuidesByCategory(route.paramMap.get('categorySlug'));
    }
}

@Injectable({
    providedIn: 'root'
})
export class HomeGuidesGuideResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GuideCategory>
    {
        return this._homeService.getGuide(route.parent.paramMap.get('categorySlug'), route.paramMap.get('guideSlug'));
    }
}
