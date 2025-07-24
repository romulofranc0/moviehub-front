import {Component, inject} from '@angular/core';
import {Card} from 'primeng/card';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service';
import {CreateUserRequest} from '../../models/create-user-request';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    Card,
    ReactiveFormsModule,
    InputText,
    Button,
    RouterLink,
    Toast,
    CommonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  myForm: FormGroup;
  userRequest?:CreateUserRequest;

  constructor(private formBuilder: FormBuilder,
              private _messageService:MessageService,
              private _authService:AuthService) {
    this.myForm = formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.userRequest = {
        username:this.myForm.value.username,
        email:this.myForm.value.email,
        password:this.myForm.value.password,
        role:'USER'
      }
     this._authService.registerUser(this.userRequest).subscribe({
        next: result => {
          this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Success' });

        },
        error: err => {
          this._messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.message });
        }
      })

    }else{

    }
  }
}
