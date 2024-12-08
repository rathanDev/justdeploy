import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fb.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      plainPassword: ['', [Validators.required]],
      address: ['', []],
      dob: ['', []],
    });
  }

  onSubmit() {
    const info = this.registerForm.value;
    console.log('info', info);
    this.registerService.register(info);
  }
}
