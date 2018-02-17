import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BannerComponent} from './banner/banner.component';


import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {MenuService} from './menu.service';
import {NavItemComponent} from './nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
