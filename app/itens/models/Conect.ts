import { UserLogin } from "./UserLoginRegister";

export interface OptionsConect{
    rout: string, 
    token?: string, 
    body?: UserLogin   
}

export class Conect{
  method: "GET" | "DELET" | "POST" | "PUT";
  headers: {
    "Authorization"?: string | undefined,
    "Content-Type": "application/json"
  };

  constructor(
    headers: {
      "Authorization"?: string | undefined,
      "Content-Type": "application/json"
    },
    method: "GET" | "DELET" | "POST" | "PUT", 
    ){
      this.method = method,
      this.headers = headers   
  }
}
