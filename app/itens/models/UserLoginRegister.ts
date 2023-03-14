export class UserLoginRegister{
  public email: string;
  public password: string;
  public nameShop?: string;

  constructor( email: string, password: string, nameShop?: string){
    this.email = email;
    this.password = password;   
    this.nameShop = nameShop;
  }
}