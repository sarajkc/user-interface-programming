import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { MatLabel } from '@angular/material/form-field';
import { CommonModule, NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { AccountModel } from '../account.model';
import Swal from 'sweetalert2';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';





@Component({
  selector: 'app-profile',
  imports: [MatToolbar, RouterLink, MatIcon, MatFormField, FormsModule, MatTab, MatTabGroup, MatLabel, MatInputModule, NgIf, 
    MatTableModule, MatSelectModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers:[]
})
export class ProfileComponent implements OnInit{

  public accountService: AccountService
  public active: AccountModel | null = null
  oldPassword: string =''
  newPassword: string =''
  purchasedTickets: any[] =[]
  displayedColumns: string[]=['film-name', 'review']
  reviews=[1,2,3,4,5,6,7,8,9,10]



  constructor(private router: Router, private route: ActivatedRoute){
    this.accountService = AccountService.getInstance()
  }

  onSave(){


    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(!passwordPattern.test(this.newPassword)){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must meet complexity requirements!"
      })
      return
    }

    const success = this.accountService.changePassword(this.oldPassword, this.newPassword)
    if(success){
      Swal.fire({
        title: "Your password has been changed!",
        icon: "success"
      }) }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password change failed!"
        })

      }

    }
    
  ngOnInit(): void {
    try{ 
      this.active = this.accountService.getCurrentAccount()
       const allPurchases =JSON.parse(localStorage.getItem('purchased') || '[]')

      this.purchasedTickets = allPurchases.filter((film:any) => film.email == this.active?.email)
     
    } catch(e){
     this.router.navigate(['/login'], {relativeTo: this.route

     })

    }
  }

 onSaveChanges(){
  if(!this.active) return

  try{
    this.accountService.updateCurrentAccount(this.active)

    Swal.fire({
      title: "Profile updated successfully!",
      icon: "success"
    });

  } catch(e){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Update failed!"
    });
  }
 }

 reviewFilm(film:any, review:number):void{
  if(!this.active) return;
  film.review = review
  const allPurchases= JSON.parse(localStorage.getItem('purchased') || '[]')
  for(const item of allPurchases){
    if(
      item.email === this.active.email &&
      item.name === film.name &&
      item.screening_time === film.screening_time
    ){
      item.review = review
      break
    }
  }
  localStorage.setItem('purchased', JSON.stringify(this.purchasedTickets))

 }

 getReviewPercentage(review:number):number{
  if(review >=1 && review <=10){
    return review * 10
  }
  return 0
  }
  public doLogout(){
      this.accountService.logout()
      Swal.fire("You are logged out!");
      this.router.navigate(['/'],{
        relativeTo: this.route
      })
      }


 }






