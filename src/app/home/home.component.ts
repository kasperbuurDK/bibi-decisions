import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AddressAnguniComponent } from '../custom-controls/adress-anguni/adress-anguni.component';
import { Quantity2Component } from '../custom-controls/quantity2/quantity2.component';
import { CannotBeNegativeValidator } from '../custom-controls/custom-control-base/custom-vallidators';
import { ErrorViewerComponent } from '../custom-controls/error-viewer/error-viewer.component';
import { Person2ControlComponent } from '../custom-controls/person2-control/person2-control.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    Quantity2Component,
    AddressAnguniComponent,
    ErrorViewerComponent,
    Person2ControlComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fb = inject(FormBuilder);

  fg = this.fb.group({
    navn: [null],
    adress: [null],
    quantity: [null, [Validators.max(10), CannotBeNegativeValidator]]
  });
  submitted: boolean = false;

  onSubmit() {
    this.fg.markAllAsTouched();
    this.submitted = true;
    console.log(this.fg);
    
    console.group('navn');
    console.log(this.fg.controls.navn.value);
    console.log(this.fg.controls.navn.valid);
    console.groupEnd();
    
    console.group('adress');
    console.log(this.fg.controls.adress.value);
    console.log(this.fg.controls.adress.valid);
    console.groupEnd();

    console.group('quantity');
    console.log(this.fg.controls.quantity.value);
    console.log(this.fg.controls.quantity.valid);
    console.groupEnd();

  }
}
