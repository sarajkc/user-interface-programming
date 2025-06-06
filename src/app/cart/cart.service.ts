import { Injectable } from "@angular/core";


@Injectable()

export class CartService{
    private cartItems: any[]=[];

constructor(){
    const savedcart = localStorage.getItem('cart');

    if(savedcart){
        this.cartItems = JSON.parse(savedcart);
        console.log('Data from local storage', this.cartItems)
    }else{
        console.log('The storage is empty');
    }
}

addItemsToCart(item: any): void {
    const cart = this.getItemsFromCart()
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart));
    
}

getItemsFromCart(): any[]{
    const json = localStorage.getItem('cart')
    return json ? JSON.parse(json) : []
}


clearItemsFromCart() : void{
    localStorage.removeItem('cart')
    
}

}