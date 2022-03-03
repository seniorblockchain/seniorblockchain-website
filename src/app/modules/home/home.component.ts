/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from 'app/modules/home/home.service';
import { FaqCategory } from 'app/modules/home/home.type';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector     : 'home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy
{
    options: AnimationOptions = {
        path: '/assets/animations/animation.json',
    };
    blockchain: AnimationOptions = {
        path: '/assets/animations/blockchain.json',
    };
    _2block: AnimationOptions = {
        path: '/assets/animations/2block.json',
    };
        work: AnimationOptions = {
        path: '/assets/animations/work.json',
    };
    database: AnimationOptions = {
        path: '/assets/animations/database.json',
    };
    space: AnimationOptions = {
        path: '/assets/animations/space.json',
    };

    animationCreated(animationItem: AnimationItem): void {
    }

    faqCategory: FaqCategory;
    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the FAQs
        this._homeService.faqs$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((faqCategories) => {
                this.faqCategory = faqCategories[0];
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
