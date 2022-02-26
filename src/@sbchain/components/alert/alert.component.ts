import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { sbchainAnimations } from '@sbchain/animations';
import { SBChainAlertAppearance, SBChainAlertType } from '@sbchain/components/alert/alert.types';
import { SBChainAlertService } from '@sbchain/components/alert/alert.service';
import { SBChainUtilsService } from '@sbchain/services/utils/utils.service';

@Component({
    selector       : 'sbchain-alert',
    templateUrl    : './alert.component.html',
    styleUrls      : ['./alert.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : sbchainAnimations,
    exportAs       : 'sbchainAlert'
})
export class SBChainAlertComponent implements OnChanges, OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_dismissible: BooleanInput;
    static ngAcceptInputType_dismissed: BooleanInput;
    static ngAcceptInputType_showIcon: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() appearance: SBChainAlertAppearance = 'soft';
    @Input() dismissed: boolean = false;
    @Input() dismissible: boolean = false;
    @Input() name: string = this._sbchainUtilsService.randomId();
    @Input() showIcon: boolean = true;
    @Input() type: SBChainAlertType = 'primary';
    @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sbchainAlertService: SBChainAlertService,
        private _sbchainUtilsService: SBChainUtilsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'sbchain-alert-appearance-border' : this.appearance === 'border',
            'sbchain-alert-appearance-fill'   : this.appearance === 'fill',
            'sbchain-alert-appearance-outline': this.appearance === 'outline',
            'sbchain-alert-appearance-soft'   : this.appearance === 'soft',
            'sbchain-alert-dismissed'         : this.dismissed,
            'sbchain-alert-dismissible'       : this.dismissible,
            'sbchain-alert-show-icon'         : this.showIcon,
            'sbchain-alert-type-primary'      : this.type === 'primary',
            'sbchain-alert-type-accent'       : this.type === 'accent',
            'sbchain-alert-type-warn'         : this.type === 'warn',
            'sbchain-alert-type-basic'        : this.type === 'basic',
            'sbchain-alert-type-info'         : this.type === 'info',
            'sbchain-alert-type-success'      : this.type === 'success',
            'sbchain-alert-type-warning'      : this.type === 'warning',
            'sbchain-alert-type-error'        : this.type === 'error'
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Dismissed
        if ( 'dismissed' in changes )
        {
            // Coerce the value to a boolean
            this.dismissed = coerceBooleanProperty(changes.dismissed.currentValue);

            // Dismiss/show the alert
            this._toggleDismiss(this.dismissed);
        }

        // Dismissible
        if ( 'dismissible' in changes )
        {
            // Coerce the value to a boolean
            this.dismissible = coerceBooleanProperty(changes.dismissible.currentValue);
        }

        // Show icon
        if ( 'showIcon' in changes )
        {
            // Coerce the value to a boolean
            this.showIcon = coerceBooleanProperty(changes.showIcon.currentValue);
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the dismiss calls
        this._sbchainAlertService.onDismiss
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Dismiss the alert
                this.dismiss();
            });

        // Subscribe to the show calls
        this._sbchainAlertService.onShow
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Show the alert
                this.show();
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
     * Dismiss the alert
     */
    dismiss(): void
    {
        // Return if the alert is already dismissed
        if ( this.dismissed )
        {
            return;
        }

        // Dismiss the alert
        this._toggleDismiss(true);
    }

    /**
     * Show the dismissed alert
     */
    show(): void
    {
        // Return if the alert is already showing
        if ( !this.dismissed )
        {
            return;
        }

        // Show the alert
        this._toggleDismiss(false);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss/show the alert
     *
     * @param dismissed
     * @private
     */
    private _toggleDismiss(dismissed: boolean): void
    {
        // Return if the alert is not dismissible
        if ( !this.dismissible )
        {
            return;
        }

        // Set the dismissed
        this.dismissed = dismissed;

        // Execute the observable
        this.dismissedChanged.next(this.dismissed);

        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    }
}
