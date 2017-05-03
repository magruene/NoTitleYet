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
  MdGridListModule } from '@angular/material';

import "hammerjs";

import {SummonerComponent} from './summoner/summoner.component';

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
        MdGridListModule
      ],
      declarations: [
        AppComponent,
        SummonerComponent
      ],
    }).compileComponents();
  }));

  fit('should create the app', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

    done();
  });

  it(`should have as title 'app works!'`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.isDarkTheme).toEqual(false);
    expect(app.foods).toEqual([
      {name: 'Pizza', rating: 'Excellent'},
      {name: 'Burritos', rating: 'Great'},
      {name: 'French fries', rating: 'Pretty good'},
    ]);

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
