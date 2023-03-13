import { conect } from "../conect/conect";
import { UserLogin } from "../models/UserLogin";

export class getUser{   

  signin(body: UserLogin ){
    const conection = new conect;
    return conection.post({rout: "signin", body})
  };
};