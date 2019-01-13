import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../products/products.service';
import {ProductModel} from '../../models/product.model';
import {PagesService} from '../pages.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    product: ProductModel;

    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService,
        public pagesService: PagesService,
    ) {
    }

    ngOnInit() {
        this.getProduct();
    }

    getProduct() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productsService
            .getDataForProduct(id)
            .then(data => {
                this.product = data;
            });
    }

    public addProductToCart(product) {
        this.pagesService.addProduct(product);
    }

}
