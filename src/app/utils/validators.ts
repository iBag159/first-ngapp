import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  static isChild(control: AbstractControl) {
    const value = control.value;
    if(parseInt(value) >= 18) {
      return {isChild: true}
    }
    return null;
  }
}