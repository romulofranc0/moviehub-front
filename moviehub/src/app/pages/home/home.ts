import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [
    InputText,
    Button
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
