import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactsComponent} from './pages/contacts/contacts.component';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'contacts', component: ContactsComponent},
    {path: 'detail/:id', component: AboutComponent},
    {path: 'home', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
