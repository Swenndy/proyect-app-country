import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
=======
import { HomePage } from './shared/pages/home-page/home-page';
>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741

export const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: HomePageComponent,
  },

  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'), //.then(m => m.countryRoutes)
  },

  {
    path: '**',
    redirectTo: '',
  },
=======
    component: HomePage,
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'),

  },
  {
    path: '**',
    redirectTo: '',
  }
>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741
];
