import {Component, OnInit, Input} from '@angular/core';
import {PagesService} from '../../pages/pages.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    @Input() title;
    @Input() links = [];

    isMobileNavOpen = false;
    productsInCart: any = [];
    totalPriceInCart: any = [];
    totalItemsInCart: any = [];
    sumTotalPriceInCart: number;
    sumTotalItemsInCart: number;

    constructor(private pagesService: PagesService) {
    }

    ngOnInit() {
        this.watchCartForChanges();
        this.checkCartForProducts();
    }

    checkCartForProducts() {
        const products = JSON.parse(this.pagesService.getProduct(this.pagesService.productKey));
        if (this.pagesService.productKey in localStorage) {
            this.productsInCart = products;
            this.calculateTotalPrice();
            this.calculateTotalItemsInCart();
        }
    }

    watchCartForChanges() {
        this.pagesService.watchStorage
            .subscribe((currentProduct) => {
                const findProduct = this.productsInCart.find(p => p.id === currentProduct.id);

                if (!this.productsInCart.length || this.productsInCart.length && !findProduct) {
                    this.productsInCart.push(currentProduct);
                } else {
                    this.productsInCart.find(p => p.id === currentProduct.id).quantityInCart = currentProduct.quantityInCart;
                }
                this.calculateTotalPrice();
                this.calculateTotalItemsInCart();
            });
    }

    calculateTotalPrice() {
        this.totalPriceInCart = [];
        this.productsInCart.forEach(product => {
            const productPrice = product.price * product.quantityInCart;
            this.totalPriceInCart.push(productPrice);
        });
        this.sumTotalPriceInCart = this.totalPriceInCart.reduce((sum, current) => sum + current).toFixed(2);
    }

    calculateTotalItemsInCart() {
        this.totalItemsInCart = [];
        this.productsInCart.forEach(product => {
            this.totalItemsInCart.push(product.quantityInCart * 1);
        });
        this.sumTotalItemsInCart = this.totalItemsInCart.reduce((sum, current) => sum + current);
    }

    collapseMobileNav() {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

}
