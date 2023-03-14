import { conect } from "../conect/conect";
import { UserLoginRegister } from "../models/UserLoginRegister";

export class signinRegisters{   

  signin(body: UserLoginRegister ){
    const conection = new conect;
    return conection.post({rout: "signin", body})
  };
  register(body: UserLoginRegister ){
    const conection = new conect;
    return conection.post({rout: "register", body})
  };
};