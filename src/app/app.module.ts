import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeCO from '@angular/common/locales/es-CO';
import localeFR from '@angular/common/locales/fr';
import localeUS from '@angular/common/locales/en-US-POSIX';

registerLocaleData(localeCO, 'es-CO');
registerLocaleData(localeFR, 'fr');
registerLocaleData(localeUS, 'es-US');

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarStringPipe } from './pipes/ocultar-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    OcultarStringPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
