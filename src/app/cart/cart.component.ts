import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink} from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { CartService } from './cart.service';
import { AccountService } from '../account/account.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  imports: [MatToolbarModule, RouterLink, MatIcon, MatTableModule, MatButtonModule, MatTooltip],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers:[CartService, AccountService]
})
export class CartComponent implements OnInit{

cartItems: any[]=[];
displayedColumns: string[]=['name', 'genre', 'ticketPrice', 'screening_time', 'remove']


constructor(private cartService: CartService, public accountService: AccountService,private router: Router, private route: ActivatedRoute){}



ngOnInit(): void {
  try{ 
    const currentAccount = this.accountService.getCurrentAccount()
    if(!currentAccount) throw new Error ("No active user")
    this.cartItems = this.cartService.getItemsFromCart()
   
  } catch(e){
   this.router.navigate(['/login'], {relativeTo: this.route

   })

  }
}

removeFromCart(item:any){
  this.cartItems = this.cartItems.filter(i => i.name!== item.name || i.screening_time !== item.screening_time);
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
}

totalPrice(): number{
  let total = 0
  this.cartItems.forEach(item => total += Number(item.ticketPrice))
  return total
}

buyTickets():void{
  if(this.cartItems.length == 0){
    Swal.fire({
      icon: "error",
      title: "Add items before purchasing!",
    });
    return
    }

  const purchased = JSON.parse(localStorage.getItem('purchased') || '[]')

    const newPurchases = this.cartItems.map(item=>({
  
        name: item.name,
        genre: item.genre,
        ticketPrice: item.ticketPrice,
        screening_time: item.screening_time,
        rating:0,
        email:this.accountService.getCurrentAccount().email
      }))
    

  const updatedPurchases = purchased.concat(newPurchases)
  localStorage.setItem('purchased', JSON.stringify(updatedPurchases))

  this.cartService.clearItemsFromCart()
  this.cartItems=[]
  Swal.fire({
    title: "Purchase successful!",
    icon: "success",
    draggable: false
  });

}
public doLogout(){
    this.accountService.logout()
    Swal.fire("You are logged out!");
    this.router.navigate(['/'],{
      relativeTo: this.route
    })
    }


}
