import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { LeagueService } from './services/league.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  summoner: string;
  selectedRegion: string;

  constructor(public dialog: MdDialog, private leagueService: LeagueService) {
    this.leagueService = leagueService;
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe((result) => {
      this.summoner = result.summoner;
      this.selectedRegion = result.region;
      console.log(result)
    });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.openDialog();
    // }, 1);
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './login-dialog.html',
})
export class DialogResultExampleDialog {
  regions: object;

  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>, private leagueService: LeagueService) {
  }
  ngAfterViewInit(): void {
    this.leagueService.getRegions().subscribe(regions => this.regions = regions);
  }

}
