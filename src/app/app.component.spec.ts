import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdGridListModule,
  MdDialogModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import "hammerjs";

import {SummonerComponent} from './summoner/summoner.component';
import {LeagueService} from './league.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdInputModule,
        MdIconModule,
        MdGridListModule,
        BrowserAnimationsModule,
        MdDialogModule
      ],
      declarations: [
        AppComponent,
        SummonerComponent
      ],
      providers: [LeagueService]
    }).compileComponents();
  }));

  it('should create the app', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

    done();
  });
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
