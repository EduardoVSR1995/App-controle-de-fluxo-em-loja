import { Conect, OptionsConect } from "../models";

export class conect{
  private api: string; 
  private getConect: Conect;  
  private postConect: Conect;  
  private deletConect: Conect;  
  private putConect: Conect;  

  constructor(){
    this.api = "http://localhost:4000";
    this.getConect = { 
      method: "GET", 
      headers:{ 
          "Authorization": "", 
          "Content-Type":"application/json" 
      }
    };
    this.postConect = { 
      method: "POST", 
      headers:{ 
        "Authorization": "", 
        "Content-Type":"application/json" 
      }
    };
    this.deletConect = {
      method: "DELET", 
      headers:{ 
        "Authorization": "", 
        "Content-Type":"application/json" 
      } 
    };
    this.putConect = {
      method: "PUT", 
      headers:{ 
        "Authorization": "", 
        "Content-Type":"application/json" 
      } 
    };
  }

  async get(rout: string, token?: string){
    if(token) this.getConect.headers.Authorization = "Bearer "+token;
    
    return (await fetch(this.api+"/"+rout, this.getConect )).json()
  };

  async post({rout, token, body}: OptionsConect ){
    if(token) this.postConect.headers.Authorization = "Bearer "+token;
    
    return (await fetch(this.api+"/"+rout, { ...this.postConect, body: JSON.stringify(body) } )).json()
  };
  async delet({rout, token, body}: OptionsConect){
    if(token) this.deletConect.headers.Authorization = "Bearer "+token;
    
    return (await fetch(this.api+"/"+rout, { ...this.deletConect, body: JSON.stringify(body) } )).json()
  }
  async put({rout, token, body}: OptionsConect){
    if(token) this.putConect.headers.Authorization = "Bearer "+token;
    
    return (await fetch(this.api+"/"+rout, { ...this.putConect, body: JSON.stringify(body) } )).json()
  }
}

