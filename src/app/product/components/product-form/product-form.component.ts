import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.minLength(10), Validators.required]],
      image: [''],
      price: [100, [Validators.min(0)]],
      description: ['', Validators.minLength(50)]
    })

    this.form
    .valueChanges
    .subscribe(data => {
      console.log(data)
    })
  }

  create() {
    if(this.form.valid) {
      console.log(this.form.valid)
    }
  }

  get titleField() {
    return this.form.get('title');
  }
}
