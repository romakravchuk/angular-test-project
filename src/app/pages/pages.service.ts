import {Injectable} from '@angular/core';
import {LocalStorage} from '../shared/localstorage.service';

@Injectable()
export class PagesService {

  currentProduct: any = [];

  constructor(private localStorage: LocalStorage) {
  }

  public addProduct(product) {
    this.currentProduct.push(JSON.stringify(product));
    localStorage.set('cardProducts', this.currentProduct);
  }
}
