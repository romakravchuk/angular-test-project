import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// In memory Web Api
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './products/in-memory-data.service';

// Ui elements
import {HeaderComponent} from './ui/header/header.component';
import {FooterComponent} from './ui/footer/footer.component';

import {SwiperModule} from 'ngx-swiper-wrapper';
import {SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

// Pages
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactsComponent} from './pages/contacts/contacts.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    autoplay: {
        delay: 5500,
    },
    direction: 'horizontal',
    slidesPerView: 3,
    navigation: true
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        SwiperModule
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
