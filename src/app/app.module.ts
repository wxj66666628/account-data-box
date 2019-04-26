import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountDataBoxComponent } from './account-data-box/account-data-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDataBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
