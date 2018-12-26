import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

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

    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }
}
