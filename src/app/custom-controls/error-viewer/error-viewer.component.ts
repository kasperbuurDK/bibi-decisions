import { Component, Input } from '@angular/core';
import { KnownValidationErrors } from '../custom-control-base/custom-vallidators';
import { MatSelectModule } from '@angular/material/select';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-viewer',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './error-viewer.component.html',
  styleUrl: './error-viewer.component.scss'
})
export class ErrorViewerComponent {
@Input({required: true}) errors: ValidationErrors | null = null;

knownErorrs = KnownValidationErrors;


}
