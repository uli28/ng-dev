import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  config: MatSnackBarConfig;

  constructor(private snackBar: MatSnackBar) {
    this.config = new MatSnackBarConfig();
    this.config.duration = 1000;
    this.config.panelClass = ['app-snackbar'];
  }

  displayAlert(title: string, msg: string) {
    this.snackBar.open(title, msg, this.config);
  }
}
