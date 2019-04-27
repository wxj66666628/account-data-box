import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AccountDataBoxComponent } from './account-data-box/account-data-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {HttpClientService} from "./http.service";
import {ToThousandModule} from "./to-thousand.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AccountDataBoxComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToThousandModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    HttpClientService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
