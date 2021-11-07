import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavbarMaterialDialogComponent } from './navbar-material-dialog/navbar-material-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(NavbarMaterialDialogComponent);
  }
  ngOnInit(): void {}
}
