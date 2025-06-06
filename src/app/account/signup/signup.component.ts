import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatHint } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AccountService } from '../account.service';
import { MatTooltip } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  imports: [MatCardModule, MatFormField, MatError,FormsModule, MatNativeDateModule, RouterLink, MatToolbar, 
    MatIcon, MatTooltip, NgIf, MatInputModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[]
})
export class SignupComponent {

  nameSurname: string = ''
  address: string = ''
  city: string = ''
  telephone: string = ''
  email: string = ''
  username: string = ''
  favGenre: string =''
  password: string = ''
  private accountService: AccountService


  constructor( private router: Router, private route: ActivatedRoute){
    this.accountService = AccountService.getInstance()
  }

  public updateNameSurname(e:any){
    this.nameSurname = e.target.value
  }

  public updateAddress(e:any){
    this.address = e.target.value
  }

  public updateCity(e:any){
    this.city = e.target.value
  }

  public updateTelephone(e:any){
    this.telephone = e.target.value
  }

  public updateEmail(e:any){
    this.email = e.target.value
  }

  public updateUsername(e:any){
    this.username = e.target.value
  }

  public updateFavGenre(e:any){
    this.favGenre = e.target.value
  }

  public updatePassword(e:any){
    this.password = e.target.value
  }

  public doSignup( form: NgForm){
    if(form.invalid ){
      Swal.fire({
        icon: "error",
        title: "Please fill out all the fields correctly!",
      });
      return
    }

    try{ this.accountService.createAccount({
      nameSurname: this.nameSurname,
      address: this.address,
      city: this.city,
      telephone: this.telephone,
      email: this.email,
      username: this.username, 
      favGenre: this.favGenre,
      password: this.password
     })}
     catch (e){
     alert(e)
     return
     }

     this.router.navigate(['/login'], {
      relativeTo:this.route
     })

  }
  }

 

  



