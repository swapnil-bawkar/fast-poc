import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LaunchApplicationFormService {
  launchApplicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  createForm() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.launchApplicationForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(reg)]],
    });
    return this.launchApplicationForm;
  }
}
