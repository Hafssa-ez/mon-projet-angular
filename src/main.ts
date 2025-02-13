// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

// Pour HttpClient + intercepteur (en mode DI classique)
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './app/services/token.interceptor';

// Si tu veux utiliser [(ngModel)] dans tous tes composants sans ré-importer FormsModule à chaque fois :
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    // Routes
    provideRouter(APP_ROUTES),

    // HttpClient (avec la possibilité d'utiliser des intercepteurs déclarés via DI)
    provideHttpClient(withInterceptorsFromDi()),

    // On déclare l'intercepteur via l'ancien style (multi: true)
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

    // Permet d'utiliser [(ngModel)] globalement (optionnel si tu préfères importer FormsModule dans chaque composant)
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
