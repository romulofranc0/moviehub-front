import {Component, inject} from '@angular/core';
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Toast} from "primeng/toast";
import {MessageService} from 'primeng/api';
import {AuthService} from '../../services/auth-service';
import {LoginUserRequest} from '../../models/login-user-request';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    Button,
    Card,
    InputText,
    ReactiveFormsModule,
    RouterLink,
    Toast
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private formBuilder = inject(FormBuilder);
  private _messageService = inject(MessageService);
  private _authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup;
  userRequest?: LoginUserRequest;

  constructor() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userRequest = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      }
      this._authService.loginUser(this.userRequest).subscribe({
        next: () => {
          this._messageService.add({severity: 'success', summary: 'Success', detail: 'Login successfully'});
          this.router.navigate(['/home']);
        },
        error: (err: { error: { message: any; }; }) => {
          this._messageService.add({severity: 'error', summary: 'Error', detail: err.error?.message});
        }
      })

    } else {

    }
  }

}
