import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar uma conta'
  };
  private nameControl = new FormControl(' ', [Validators.required, Validators.minLength(3)]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name(): FormControl {
    return this.authForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Registrar-se';
    this.configs.actionChange = isSignIn ? 'Criar uma conta' : 'Ja tenho uma conta';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }
}
