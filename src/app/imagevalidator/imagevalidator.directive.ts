import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appImagevalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ImagevalidatorDirective,
      multi: true,
    },
  ],
})
export class ImagevalidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const url = control.value as string;

    if (url.slice(8, 29) === 'media.istockphoto.com') {
      return { invalidSource: true };
    }

    return null;
  }
}
