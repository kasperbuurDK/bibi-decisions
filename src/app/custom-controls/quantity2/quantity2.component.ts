import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomControlSingleBaseDirective } from '../custom-control-base/custom-control-single-base.directive';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ErrorViewerComponent } from '../error-viewer/error-viewer.component';

@Component({
  selector: 'app-quantity2',
  standalone: true,
  imports: [
    MatIconModule,
    MatIconButton,
    MatSelectModule,
    ErrorViewerComponent,
  ],
  templateUrl: './quantity2.component.html',
  styleUrl: './quantity2.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: Quantity2Component,
    },
    { provide: NG_VALIDATORS, multi: true, useExisting: Quantity2Component },
  ],
})
export class Quantity2Component extends CustomControlSingleBaseDirective {
  override value: number = 0;
  increment: number = 1;

  constructor() {
    super();
    // this.setValidationFunction((control: AbstractControl<any,any>): ValidationErrors | null => {
    //   const value = control.value;
    //   if (value < 0) {
    //     return {cannotBeLessThanZero: {value}}
    //   }
    //   return null;
    // })
  }

  onAdd() {
    this.markAsTouched();
    this.value += this.increment;
    this.onChange(this.value);
  }

  onRemove() {
    this.markAsTouched();
    this.value -= this.increment;
    this.onChange(this.value);
  }
}
