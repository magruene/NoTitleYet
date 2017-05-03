import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdGridListModule } from '@angular/material';

import { SummonerComponent } from './summoner.component';

describe('SummonerComponent', () => {
  let component: SummonerComponent;
  let fixture: ComponentFixture<SummonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerComponent ],
      imports: [
        MdCardModule,
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdInputModule,
        MdIconModule,
        MdGridListModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
