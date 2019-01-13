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
    isCartOpen = false;
    productsInCart: any = [];
    totalPriceInCart: any = [];
    totalItemsInCart: any = [];
    sumTotalPriceInCart: number;
    sumTotalItemsInCart: number;

    constructor(private pagesService: PagesService) {
    }

    ngOnInit() {
        if (this.productsInCart.length) {
            this.watchCartForChanges();
            this.checkCartForProducts();
        }
    }

    private checkCartForProducts() {
        const products = JSON.parse(this.pagesService.getProduct(this.pagesService.productKey));
        if (this.pagesService.productKey in localStorage) {
            this.productsInCart = products;
            this.calculateTotalPrice();
            this.calculateTotalItemsInCart();
        }
    }

    private watchCartForChanges() {
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

    public removeProductFromCart(product) {
        this.productsInCart = this.productsInCart.filter(p => p.id !== product.id);

        this.pagesService.clearLocalStorageCart();
        this.pagesService.setLocalStorageCart(this.productsInCart);
        if (this.productsInCart.length) {
            this.calculateTotalPrice();
            this.calculateTotalItemsInCart();
        }
    }

    private calculateTotalPrice() {
        this.totalPriceInCart = [];
        this.productsInCart.forEach(product => {
            const productPrice = product.price * product.quantityInCart;
            this.totalPriceInCart.push(productPrice);
        });
        this.sumTotalPriceInCart = this.totalPriceInCart.reduce((sum, current) => sum + current).toFixed(2);
    }

    private calculateTotalItemsInCart() {
        this.totalItemsInCart = [];
        this.productsInCart.forEach(product => {
            this.totalItemsInCart.push(product.quantityInCart * 1);
        });
        this.sumTotalItemsInCart = this.totalItemsInCart.reduce((sum, current) => sum + current);
    }

    public collapseMobileNav() {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

    public showCart() {
        this.isCartOpen = !this.isCartOpen;
    }

    public hideCart() {
        this.isCartOpen = false;
    }
}
