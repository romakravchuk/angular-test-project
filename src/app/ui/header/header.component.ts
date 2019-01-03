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

    constructor(private pagesService: PagesService) {
    }

    ngOnInit() {
        this.watchCartForChanges();
        this.checkCartForProducts();
    }

    checkCartForProducts() {
        const products = localStorage.getItem('cardProducts');
        if (products !== null) {
            this.productsInCart = [JSON.parse(products)];
        }
    }

    watchCartForChanges() {
        this.pagesService.watchStorage
            .subscribe((currentProduct) => {
                this.productsInCart.push(currentProduct);
            });
    }

    collapseMobileNav() {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

}
