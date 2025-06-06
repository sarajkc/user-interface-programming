
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Film } from './home.films.model';
import { HomeFilmsService } from './home.films.service';
import { NgFor} from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatMenu } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatButtonModule, NgFor, NgIf, RouterLink, 
    MatMenu, MatMenuTrigger, MatTabsModule, CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[CartService, AccountService]
})
export class HomeComponent implements OnInit{

  films:Film[]=[];
  upcomingFilms:Film[]=[];

  constructor(private homeFilmsService : HomeFilmsService, private accountService: AccountService, private cartService: CartService,private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    
  this.films = this.homeFilmsService.getFilms();

  this.upcomingFilms = this.homeFilmsService.getUpcomingFilms();

  }

  public doLogout(){
    this.accountService.logout()
    Swal.fire("You are logged out!");
    this.router.navigate(['/'],{
      relativeTo: this.route
    })
    }

  reserveFilm(film:any, time:string): void{

    if(!this.accountService.hasCurrentAccount())
    {
      Swal.fire({
        icon: "error",
        title: "Please log in to book a screening!",
      }).then(() => {
        this.router.navigate(['/login'])
      })
    return
    }
    this.cartService.addItemsToCart(
      {
        name: film.name,
        genre: film.genre,
        ticketPrice: film.ticketPrice,
        screening_time: time
      }
      
    )

    Swal.fire({
      title: "Added to cart!",
      text: 'Great choice! ' + film.name + ' was added to you cart for screening at ' + time + '.',
      icon: "success"
    });
  }
      


  
}

