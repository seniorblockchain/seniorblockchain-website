import { Injectable } from '@angular/core';
import { SBChainDrawerComponent } from '@sbchain/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class SBChainDrawerService
{
    private _componentRegistry: Map<string, SBChainDrawerComponent> = new Map<string, SBChainDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: SBChainDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): SBChainDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
