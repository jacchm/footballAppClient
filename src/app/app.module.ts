import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { LeagueComponent } from './league/league.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminPanelComponent } from './admin/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    LeagueComponent,
    HomeComponent,
    TeamsComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(far, fas);
  }


}
