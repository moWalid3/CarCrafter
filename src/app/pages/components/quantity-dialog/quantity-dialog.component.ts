import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Validators, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { Car } from '../../../core/models/car.model';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CurrencyPipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterService } from '../../../core/services/toaster.service';

@Component({
  selector: 'app-quantity-dialog',
  standalone: true,
  imports: [
    MatDialogModule, MatInputModule, MatSelectModule, MatDatepickerModule,
    MatFormFieldModule, MatSnackBarModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatButtonModule, CurrencyPipe, MatIconModule
  ],
  templateUrl: './quantity-dialog.component.html',
  styleUrl: './quantity-dialog.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class QuantityDialogComponent {
  private toaster = inject(ToasterService);
  private dialogRef = inject(MatDialogRef<QuantityDialogComponent>);
  readonly colors = ['Black', 'White', 'Silver', 'Red', 'Gray', 'Yellow'];
  readonly car = inject<Car>(MAT_DIALOG_DATA);

  carForm = new FormGroup({
    selectedColor: new FormControl(null, [Validators.required]),
    pickupDate: new FormControl(this.defaultPickupDate, [Validators.required]),
    quantity: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
  });

  private get defaultPickupDate (){
    const today = new Date();
    today.setDate(today.getDate() + 10);
    return today.toISOString().split('T')[0];
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.carForm.value);
    this.toaster.showToaster(`Car added to cart successfully`)
  }
}

export function openAddCarToCartDialog(dialog: MatDialog, car: Car) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;
  config.panelClass = 'modal-panel';
  config.backdropClass = 'backdrop-modal-panel';

  config.data = { ...car };

  const dialogRef = dialog.open(QuantityDialogComponent, config);

  return dialogRef.afterClosed();
}
