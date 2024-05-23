import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: QuantityComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: QuantityComponent },
  ],
})
export class QuantityComponent implements ControlValueAccessor, Validator {
 
  @Input() increment: number = 1;
  quantity: number = 0;

  onChange = (quantity: number) => {}
  onTouched = () => {}
  touched = false;
  disabled = false;

  onAdd() {
    this.markAsTouched();
    this.quantity += this.increment;
    this.onChange(this.quantity)
  }
  
  onRemove() {
    this.markAsTouched();
    this.quantity -= this.increment;
    this.onChange(this.quantity)
  }
  
  markAsTouched() {
    if (!this.touched) {
     this.onTouched();
     this.touched = true;
    }
  }

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
   this.onTouched = onTouched;
  }
  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const quantity = control.value;
    if (quantity < 0) {
      return {
        cannotBeNegative: {quantity}
      }
    };
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
   console.log("registerOnValidatorChange");
   
  }
}
