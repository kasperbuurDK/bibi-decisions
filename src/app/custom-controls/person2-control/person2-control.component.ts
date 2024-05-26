import { Component } from '@angular/core';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorViewerComponent } from '../error-viewer/error-viewer.component';
import { CustomControlComplexBaseDirective } from '../custom-control-base/custom-control-complex-base.directive';

@Component({
  selector: 'app-person2-control',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, ErrorViewerComponent],
  templateUrl: './person2-control.component.html',
  styleUrl: './person2-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: Person2ControlComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: Person2ControlComponent,
    },
  ],
})
export class Person2ControlComponent extends CustomControlComplexBaseDirective {
  onChange = (value: any) => {};
  override fg = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    surName: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor() {
    super();
  }

  onTouchedAndChange() {
    this.onTouched();
    this.onChange(this.fg.value);
  }
}
