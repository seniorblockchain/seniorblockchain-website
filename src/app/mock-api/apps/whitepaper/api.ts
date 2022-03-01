/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { SBChainMockApiService } from '@sbchain/lib/mock-api/mock-api.service';
import { categories as categoriesData, contents as contentsData, ContentSteps as ContentStepsData } from 'app/mock-api/apps/whitepaper/data';

@Injectable({
    providedIn: 'root'
})
export class WhitePaperMockApi
{
    private _categories: any[] = categoriesData;
    private _contents: any[] = contentsData;
    private _ContentSteps: any[] = ContentStepsData;

    /**
     * Constructor
     */
    constructor(private _sbchainMockApiService: SBChainMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._sbchainMockApiService
            .onGet('api/apps/whitepaper/categories')
            .reply(() => {

                // Clone the categories
                const categories = cloneDeep(this._categories);

                // Sort the categories alphabetically by title
                categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, categories];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contents - GET
        // -----------------------------------------------------------------------------------------------------
        this._sbchainMockApiService
            .onGet('api/apps/whitepaper/contents')
            .reply(() => {

                // Clone the contents
                const contents = cloneDeep(this._contents);

                return [200, contents];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Content - GET
        // -----------------------------------------------------------------------------------------------------
        this._sbchainMockApiService
            .onGet('api/apps/whitepaper/contents/content')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the contents and steps
                const contents = cloneDeep(this._contents);
                const steps = cloneDeep(this._ContentSteps);

                // Find the content and attach steps to it
                const content = contents.find(item => item.id === id);
                if ( content )
                {
                    content.steps = steps;
                }

                return [
                    200,
                    content
                ];
            });
    }
}
