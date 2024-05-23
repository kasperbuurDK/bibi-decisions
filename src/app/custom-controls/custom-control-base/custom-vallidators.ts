import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CannotBeNegativeValidator(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  const quantity = control.value;
  if (quantity < 0) {
    return {
      [ValidationErrorCode.cannotBeNegative]: { quantity },
    };
  }
  return null;
}

export enum ValidationErrorCode {
    max = "max",
    cannotBeNegative = "cannotBeNegative"
}

export const KnownValidationErrors: {code: ValidationErrorCode, message: string}[] = [
{code: ValidationErrorCode.max, message: "Værdien er for høj"},
{code: ValidationErrorCode.cannotBeNegative, message: "Værdien må ikke være negativ"},

]

