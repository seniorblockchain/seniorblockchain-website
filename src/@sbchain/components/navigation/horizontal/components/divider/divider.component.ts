import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SBChainHorizontalNavigationComponent } from '@sbchain/components/navigation/horizontal/horizontal.component';
import { SBChainNavigationService } from '@sbchain/components/navigation/navigation.service';
import { SBChainNavigationItem } from '@sbchain/components/navigation/navigation.types';

@Component({
    selector       : 'sbchain-horizontal-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SBChainHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: SBChainNavigationItem;
    @Input() name: string;

    private _sbchainHorizontalNavigationComponent: SBChainHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sbchainNavigationService: SBChainNavigationService
    )
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
        // Get the parent navigation component
        this._sbchainHorizontalNavigationComponent = this._sbchainNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._sbchainHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
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
}
