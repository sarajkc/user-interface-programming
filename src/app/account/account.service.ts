import { Inject, Injectable } from "@angular/core";
import { AccountModel } from "./account.model";


@Injectable()


export class AccountService {

private static instance: AccountService

constructor(){
}

public static getInstance(){
    if(this.instance == null) 
        this.instance = new AccountService
    return this.instance
}

  private getAllAccounts(): AccountModel[]{
   let json =  localStorage.getItem('accounts')
    if(json == null){
        const defaultAccount = {
            nameSurname: 'Sara Jokic',
            address: 'Vojislavljevica 24',
            city: 'Podgorica',
            telephone: '061234567',
            email: 'sara@yahoo.com',
            username: 'Saki',
            favGenre: 'comedy',
            password: 'Sara123!'

        }
       localStorage.setItem('accounts', JSON.stringify([defaultAccount]))
     json = localStorage.getItem('accounts')
        
   }  return JSON.parse(json!)
   
   }
  
  public createAccount(model: AccountModel) {
  const arr = this.getAllAccounts()
  if(arr.find(account => account.email === model.email)){
  throw new Error ('EMAIL_ALREADY_EXISTS');
  }
   arr.push (model);
   localStorage.setItem ('accounts', JSON.stringify(arr));
}
    
  
  public login(email:string, password:string){
    const arr = this.getAllAccounts ()

     const acc = arr.find(account=> account.email == email)
     if (acc == undefined) {
        throw new Error('EMAIL_NOT_FOUND')
     }
     if(acc.password !== password) {
      throw new Error('LOGIN_FAILED')
     }
        
     sessionStorage.setItem('active', acc.email)
  } 

 
  public getCurrentAccount(){
    if (!sessionStorage.getItem('active'))
        throw new Error ('NO_ACTIVE_USER')

        const email = sessionStorage.getItem('active')
        const arr = this.getAllAccounts()
        const acc = arr.find( account=> account.email == email)

        if(acc == undefined )
            throw new Error ('NO_ACTIVE_USER')
        return acc
    }  
            

   public changePassword  (oldPassword:string, newPassword: string): boolean {
    const active = this.getCurrentAccount()

    if(active.password !== oldPassword){
      return false
    }
    active.password = newPassword;

    const all = this.getAllAccounts();
    const updatedPassword = all.map (account=>
      account.email === active.email ? active : account
    )
    
    localStorage.setItem('accounts', JSON.stringify (updatedPassword))
 
     return true
   } 

   public updateCurrentAccount(updated: AccountModel): void{
    const currentEmail = sessionStorage.getItem('active')
    if(!currentEmail) throw new Error ('NO_ACTIVE_USER')
      
      const accounts = this.getAllAccounts()
      const account = accounts.find(acc => acc.email === currentEmail)
      if(!account) throw new Error ('ACCOUNT_NOT_FOUND')

        account.nameSurname = updated.nameSurname
        account.address = updated.address
        account.city = updated.city
        account.telephone = updated.telephone
        account.username = updated.username
        account.favGenre = updated.favGenre

        localStorage.setItem('accounts', JSON.stringify(accounts))

   }

   public logout(){
    const acc = this.getCurrentAccount()
    sessionStorage.removeItem('active')
   }


   public hasCurrentAccount (){
    return sessionStorage.getItem('active')? true : false
   }


}

