import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/products.service';
import {ProductModel} from '../../models/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [ProductsService]
})
export class HomeComponent implements OnInit {

    allProducts: any;
    featuredProducts: any;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.productsService
            .getDataForProducts()
            .then(data => {
                this.allProducts = data;
                this.featuredProducts = this.allProducts.filter(p => p.featured);
                console.log(this.featuredProducts);
            });
    }

}
