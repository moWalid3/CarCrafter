import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private snackBar = inject(MatSnackBar);

  //=> you need to import [MatSnackBarModule] in your component
  showToaster(
    message: string,
    type: 'success' | 'error' | 'info' = 'success',
    duration: number = 3000
  ) {
    const config: MatSnackBarConfig = {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [`${type}-toast`],
    };

    this.snackBar.open(message, 'Close', config);
  }
}
