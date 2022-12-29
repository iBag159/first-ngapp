import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  emailField: FormControl;
  ageField: FormControl;

  constructor() { 
    const validations = [Validators.email, Validators.minLength(5), Validators.required]
    this.emailField = new FormControl('', validations);
    this.emailField.valueChanges
    .pipe(
      debounceTime(350)
    )
    .subscribe(value => {
      console.log(value, this.emailField.valid)
    })

    this.ageField = new FormControl('', [Validators.required, CustomValidators.isChild]);
  }
  
  ngOnInit() {
  }

}
