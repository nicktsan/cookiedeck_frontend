import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DecksearchComponent } from './decksearch/decksearch.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        // path: 'decksearch/:id',
        path: 'decksearch',
        component: DecksearchComponent,
        title: 'Deck search'
    }
];

export default routes
