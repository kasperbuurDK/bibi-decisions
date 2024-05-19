import { Component, Input } from '@angular/core';
import { AbstractControlDirective, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-my-tel-input',
  standalone: true,
  imports: [],
  providers: [{provide: MatFormFieldControl, useExisting: MyTelInputComponent}],
  templateUrl: './my-tel-input.component.html',
  styleUrl: './my-tel-input.component.scss'
})
export class MyTelInputComponent implements MatFormFieldControl<MyTel> {
  parts: FormGroup;

  stateChanges: Subject<void> = new Subject<void>;


  @Input()
  get value(): MyTel | null {
    let n = this.parts.value;
    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
  }

  constructor(fb: FormBuilder) {
    this.parts =  fb.group({
      'area': '',
      'exchange': '',
      'subscriber': '',
    });
  }

  id: string;
  placeholder: string;
  ngControl: NgControl | AbstractControlDirective | null;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;
  disableAutomaticLabeling?: boolean | undefined;
  
  override setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }
  
  override onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }
}