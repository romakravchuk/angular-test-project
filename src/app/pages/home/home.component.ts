import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/products.service';
import {PagesService} from '../pages.service';
import {ProductModel} from '../../models/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    allProducts: any;
    featuredProducts: ProductModel;
    listOfProducts: ProductModel;

    constructor(
        private productsService: ProductsService,
        public pagesService: PagesService,
    ) {
    }

    ngOnInit() {
        this.productsService
            .getDataForProducts()
            .then(data => {
                this.allProducts = data;
                this.featuredProducts = this.allProducts.filter(p => p.featured);

                this.listOfProducts = this.allProducts.filter(p => !p.featured);
            });
    }

    public addProductToCart(product) {
        this.pagesService.addProduct(product);
    }
}
