import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as pages from "./pages/index";

const Stack = createNativeStackNavigator();

export default function Aplication(): JSX.Element {
  const { Login }= new pages.sigs() ;

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown:false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}