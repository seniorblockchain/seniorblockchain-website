import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Category, Content } from 'app/modules/whitepaper/whitepaper.types';

@Injectable({
    providedIn: 'root'
})
export class WhitePaperService
{
    // Private
    private _categories: BehaviorSubject<Category[] | null> = new BehaviorSubject(null);
    private _content: BehaviorSubject<Content | null> = new BehaviorSubject(null);
    private _contents: BehaviorSubject<Content[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for categories
     */
    get categories$(): Observable<Category[]>
    {
        return this._categories.asObservable();
    }

    /**
     * Getter for contents
     */
    get contents$(): Observable<Content[]>
    {
        return this._contents.asObservable();
    }

    /**
     * Getter for content
     */
    get content$(): Observable<Content>
    {
        return this._content.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get categories
     */
    getCategories(): Observable<Category[]>
    {
        return this._httpClient.get<Category[]>('api/apps/whitepaper/categories').pipe(
            tap((response: any) => {
                this._categories.next(response);
            })
        );
    }

    /**
     * Get contents
     */
    getContents(): Observable<Content[]>
    {
        return this._httpClient.get<Content[]>('api/apps/whitepaper/contents').pipe(
            tap((response: any) => {
                this._contents.next(response);
            })
        );
    }

    /**
     * Get content by id
     */
    getContentById(id: string): Observable<Content>
    {
        return this._httpClient.get<Content>('api/apps/whitepaper/contents/content', {params: {id}}).pipe(
            map((content) => {

                // Update the content
                this._content.next(content);

                // Return the content
                return content;
            }),
            switchMap((content) => {

                if ( !content )
                {
                    return throwError('Could not found content with id of ' + id + '!');
                }

                return of(content);
            })
        );
    }
}
