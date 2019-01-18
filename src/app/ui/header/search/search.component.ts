import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../products/products.service';
import {Observable, Subject} from 'rxjs';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

    searchResult$: Observable<any[]>;
    private searchTerms = new Subject<string>();

    constructor( private productsService: ProductsService) {
    }

    ngOnInit() {
        this.searchProducts();
    }

    search(term: string): void {
        // if (term.length > 2) {
        const newdata = [
            {
                id: 1,
                product: 'Big White Cup',
                description: 'A white styrofoam cup typically used in the south to drink Promethazine with Codeine cough syrup mixed.',
                price: '120.99',
                featured: true,
                image: '../assets/img/3.jpg',
                promotion_image: '../assets/img/promotion-image-3.jpg',
                quantity: 20
            },
            {
                id: 2,
                product: 'Green Plant',
                description: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food.',
                price: '120.99',
                featured: true,
                image: '../assets/img/4.jpg',
                promotion_image: '../assets/img/promotion-image-4.jpg',
                quantity: 20
            }
        ];
        newdata.filter(product => product.map(i => i.id === 'stevie'));
        this.searchTerms.next(term);
        // }
    }

    searchProducts() {
        this.searchResult$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term) => this.productsService.getDataForProductInSearch(term))
        );

        // const newdata = this.searchResult$;
        // newdata.filter(product => product.indexOf(term.toLowerCase()) !== -1));
    }

}
