import 'hammerjs';
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdGridListModule,
  MdDialogModule,
  MdOptionModule,
  MdSelectModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LeagueService} from './league.service';

import {AppComponent, DialogResultExampleDialog} from './app.component';
import { SummonerComponent } from './summoner/summoner.component';

@NgModule({
  declarations: [
    AppComponent,
    SummonerComponent,
    DialogResultExampleDialog
  ],
  entryComponents: [
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
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
    MdGridListModule,
    MdDialogModule,
    MdOptionModule,
    MdSelectModule
  ],
  providers: [{provide: LeagueService, useClass: LeagueService}],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
