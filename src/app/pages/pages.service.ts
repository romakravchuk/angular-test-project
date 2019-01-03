import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class PagesService {

    currentProduct: any = [];
    productKey = 'cardProducts';

    public storageSub = new Subject<any>();
    public watchStorage = this.storageSub.asObservable();

    constructor() {
    }

    public setProduct(data: any) {
        this.currentProduct.push(data);
        console.log(this.currentProduct);
        localStorage.setItem(this.productKey, JSON.stringify(this.currentProduct));
        this.storageSub.next(data);
    }

    public getProduct() {
        localStorage.getItem(this.productKey);
    }

    private removeProduct(key: string) {
        localStorage.removeItem(key);
        this.storageSub.next(key);
    }

    private clearCart() {
        localStorage.clear();
    }

}
