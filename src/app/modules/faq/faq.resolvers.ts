import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FAQService } from 'app/modules/faq/faq.service';
import { FaqCategory, GuideCategory } from 'app/modules/faq/faq.type';

@Injectable({
    providedIn: 'root'
})
export class FAQMostAskedFaqsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _faqService: FAQService)
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
        return this._faqService.getFaqsByCategory('most-asked');
    }
}

@Injectable({
    providedIn: 'root'
})
export class FAQFaqsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _faqService: FAQService)
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
        return this._faqService.getAllFaqs();
    }
}

@Injectable({
    providedIn: 'root'
})
export class FAQGuidesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _faqService: FAQService)
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
        return this._faqService.getAllGuides();
    }
}

@Injectable({
    providedIn: 'root'
})
export class FAQGuidesCategoryResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _faqService: FAQService)
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
        return this._faqService.getGuidesByCategory(route.paramMap.get('categorySlug'));
    }
}

@Injectable({
    providedIn: 'root'
})
export class FAQGuidesGuideResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _faqService: FAQService)
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
        return this._faqService.getGuide(route.parent.paramMap.get('categorySlug'), route.paramMap.get('guideSlug'));
    }
}
