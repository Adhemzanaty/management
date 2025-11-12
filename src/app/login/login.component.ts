import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


   active:boolean = false;

  constructor() {


  }


  sighnUp(){
    this.active = true;

  }

  sighnIn(){
    this.active = false;


  }
 
}
