import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatError } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AccountService } from '../account.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  imports: [MatToolbar,RouterLink,MatFormField, MatIcon, MatError, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[]
})
export class LoginComponent {

  public email: string = ''
  public password: string = ''
  public accountService: AccountService

  constructor(private router: Router, private route:ActivatedRoute){
    this.accountService = AccountService.getInstance()
  }

  public doLogin(form: NgForm){

    if(form.invalid){
      Swal.fire({
        icon: "error",
        title: "Log in failed!",
        text: "Incorrect email or password!"
      });
      return
     }
    try{
      

      this.accountService.login(this.email, this.password)
      this.router.navigate(['/'])
    }catch(e : any){
      
        Swal.fire({
          icon: "error",
          title: "Log in failed!",
          text: "Incorrect email or password!"
        })
      
    }

  }

}
