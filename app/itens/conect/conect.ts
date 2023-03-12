import { Conect } from "../models";

export class conect{
  private api: string; 
  private getConect: Conect;  

  constructor(){
    this.api = "http://localhost:4000";
    this.getConect = { 
      method: "GET", 
      headers:{ 
        "Authorization": "", 
        "Content-Type":"application/json" 
      }
    };
  }

  async get(rout: string, token?: string){
    if(token) this.getConect.headers.Authorization = "Bearer "+token;
    
    return (await fetch(this.api+"/"+rout, this.getConect )).json()
  }
}