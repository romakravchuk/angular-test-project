import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class PagesService {

    currentProduct: any = [];
    productKey = 'cardProducts';

    public storageSub = new Subject<any>();
    public watchStorage = this.storageSub.asObservable();

    constructor() {}

    public addProduct(data: any) {
        if (this.productKey in localStorage) {
            const products = this.getProduct(this.productKey);
            this.currentProduct = JSON.parse(products);

            const findProduct = this.currentProduct.find(p => p.id === data.id);

            if (findProduct && findProduct.quantityInCart < data.quantity) {
                findProduct.quantityInCart += 1;
                this.setLocalStorageCart(this.currentProduct);
                this.storageSub.next(findProduct);
            } else if (!findProduct) {
                this.setProductToLocalStorage(data);
            } else if (findProduct && findProduct.quantityInCart === data.quantity) {
                alert('You cant by more then ' + findProduct.quantity + ' items');
            }

        } else {
            this.setProductToLocalStorage(data);
        }
    }

    private setProductToLocalStorage(data: any) {
        data.quantityInCart = 1;
        this.currentProduct.push(data);
        this.setLocalStorageCart(this.currentProduct);
        this.storageSub.next(data);
    }

    public getProduct(key: string) {
        return localStorage.getItem(key);
    }

    public clearLocalStorageCart() {
        this.currentProduct = [];
        return localStorage.clear();
    }

    public setLocalStorageCart(product) {
        localStorage.setItem(this.productKey, JSON.stringify(product));
    }
}
