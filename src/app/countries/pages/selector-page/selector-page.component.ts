import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent {
  private fb: FormBuilder = new FormBuilder();

  public myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    bordes: ['', [Validators.required]],
  });
}
