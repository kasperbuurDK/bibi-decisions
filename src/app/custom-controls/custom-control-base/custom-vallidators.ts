import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CannotBeNegativeValidator(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  const quantity = control.value;
  if (quantity < 0) {
    return {
      cannotBeNegative: { quantity },
    };
  }
  return null;
}
