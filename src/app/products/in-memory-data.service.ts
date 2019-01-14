import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [
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
            },
            {
                id: 3,
                product: 'Cactus',
                description: 'A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some species.',
                price: '15.99',
                featured: true,
                image: '../assets/img/5.jpg',
                promotion_image: '../assets/img/promotion-image-5.jpg',
                quantity: 20
            },
            {
                id: 4,
                product: 'Big White Cup',
                description: 'A white styrofoam cup typically used in the south to drink Promethazine with Codeine cough syrup mixed.',
                price: '120.99',
                featured: false,
                image: '../assets/img/6.jpg',
                promotion_image: '../assets/img/promotion-image-6.jpg',
                quantity: 20
            },
            {
                id: 5,
                product: 'Green Plant',
                description: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food.',
                price: '120.99',
                featured: false,
                image: '../assets/img/7.jpg',
                promotion_image: '../assets/img/promotion-image-4.jpg',
                quantity: 20
            },
            {
                id: 6,
                product: 'Cactus',
                description: 'A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some species.',
                price: '15.99',
                featured: false,
                image: '../assets/img/8.jpg',
                promotion_image: '../assets/img/promotion-image-5.jpg',
                quantity: 20
            },
            {
                id: 7,
                product: 'Big White Cup',
                description: 'A white styrofoam cup typically used in the south to drink Promethazine with Codeine cough syrup mixed.',
                price: '120.99',
                featured: false,
                image: '../assets/img/9.jpg',
                promotion_image: '../assets/img/promotion-image-3.jpg',
                quantity: 20
            },
            {
                id: 8,
                product: 'Green Plant',
                description: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food.',
                price: '120.99',
                featured: false,
                image: '../assets/img/10.jpg',
                promotion_image: '../assets/img/promotion-image-6.jpg',
                quantity: 20
            },
            {
                id: 9,
                product: 'Cactus',
                description: 'A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some species.',
                price: '15.99',
                featured: false,
                image: '../assets/img/11.jpg',
                promotion_image: '../assets/img/promotion-image-5.jpg',
                quantity: 20
            }
        ];
        return {products};
    }
}
