import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { allStyle } from "../components/index";
import { UserLoginRegister } from "../models";

export class sigs{
  
  Login(): JSX.Element {
    const [ login, setLogin ] = useState<UserLoginRegister>( UserLoginRegister.prototype );
    const [ option, setOption ] = useState<boolean>(true);

    const style = allStyle.prototype.style(); 

    return(
      <>
        <View style={ style.header } >
          <Text style={ style.fontHeader } >Controle de fluxo</Text>
          <Text style={ style.fonts } >
            { option ? "Cadastrar loja" : "Login" }  
          </Text>
        </View>
        {
          option ?
          <SafeAreaView 
            style={{ 
              ...style.activit, 
              ...style.input
              }}
            >
            <TextInput 
              value={login?.nameShop} 
              placeholder="Nome da loja" 
              onChangeText={ 
                (i) => setLogin({ ...login, nameShop: i }) } 
              underlineColorAndroid="transparent" 
              style={style.fonts}
            />
          </SafeAreaView> : ''
        }
        <SafeAreaView 
          style={{ 
            ...style.activit, 
            ...style.input
            }}
          >
          <TextInput 
            value={login?.email} 
            placeholder="E-mail" 
            onChangeText={ 
              (i) => setLogin({ ...login, email: i }) } 
            underlineColorAndroid="transparent" 
            style={style.fonts}
          />
        </SafeAreaView>
        <SafeAreaView 
          style={{ 
            ...style.activit, 
            ...style.input
            }}
          >
          <TextInput 
            value={login?.password} 
            placeholder="Senha" 
            onChangeText={ 
              (i) => setLogin({ ...login, password: i }) } 
            underlineColorAndroid="transparent" 
            style={style.fonts}
          />
        </SafeAreaView>
        <View style={ style.header } >
          <TouchableOpacity onPress={() => option ? setOption(false) : setOption(true) }>
            <Text style={ style.fonts } >
              { option ? "Login" : "Cadastrar loja" }
            </Text>
          </TouchableOpacity>
        </View>
        
      </>
    );
  }
}

