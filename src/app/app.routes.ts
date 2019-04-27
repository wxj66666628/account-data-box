import { Routes } from '@angular/router';
import {AccountDataBoxComponent} from "./account-data-box/account-data-box.component";
export const ROUTES: Routes = [
  { path: '', redirectTo: 'account-data-box', pathMatch: 'full' },
  { path: 'account-data-box', component: AccountDataBoxComponent}
];
