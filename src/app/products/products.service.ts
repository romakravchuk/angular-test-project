import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, tap, filter } from 'rxjs/operators';
import {log} from 'util';

@Injectable()
export class ProductsService {

    private productsUrl = 'api/products';

    constructor(private http: HttpClient) {
    }

    /**
     * Get data for global carousel
     */
    getDataForProducts(): Promise<any> {
        return this.http.get<any>(this.productsUrl)
            .toPromise()
            .then(response => response as any)
            .catch(this.handleError);
    }

    /**
     * Get data for single product details page
     */
    getDataForProduct(id: number): Promise<any> {
        return this.http.get<any>(`${this.productsUrl}/${id}`)
            .toPromise()
            .then(response => response as any)
            .catch(this.handleError);
    }

    /**
     * Get data for search product
     */
    getDataForProductInSearch(term: string): Observable<any> {
        const searchKey = ['product', 'id', 'description'];
        if (term.length < 2) {
            return of([]);
        }
        return this.http.get<any[]>(`${this.productsUrl}`)
            .pipe(
                tap(() => log(`found heroes matching "${term}"`)),
                // filter(product => product.indexOf(term.toLowerCase()) !== -1),
                catchError(this.handleError)
            );
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }
}
