import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
=======
import { App } from './app/app';

bootstrapApplication(App, appConfig)
>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741
  .catch((err) => console.error(err));
