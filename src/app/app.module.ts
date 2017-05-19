import 'hammerjs';
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdListModule,
  MdDialogModule,
  MdOptionModule,
  MdSelectModule,
  MdProgressSpinnerModule,
  MdRadioModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import {LeagueService} from './services/league.service';
import {SessionInfoService} from './services/session-info.service';

import {AppComponent, DialogResultExampleDialog} from './app.component';
import { SummonerComponent } from './summoner/summoner.component';
import { ActiveGameComponent } from './active-game/active-game.component';
import { SearchSummonerComponent } from './search-summoner/search-summoner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SummonerInfoComponent } from './summoner-info/summoner-info.component';


const appRoutes: Routes = [
  { path: 'search', component: SearchSummonerComponent},
  { path: 'home/:id', component: SummonerComponent },
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SummonerComponent,
    DialogResultExampleDialog,
    ActiveGameComponent,
    SearchSummonerComponent,
    PageNotFoundComponent,
    SummonerInfoComponent
  ],
  entryComponents: [
    DialogResultExampleDialog
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdListModule,
    MdDialogModule,
    MdOptionModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    MdRadioModule
  ],
  providers: [
    {provide: LeagueService, useClass: LeagueService},
    {provide: SessionInfoService, useClass: SessionInfoService}
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
