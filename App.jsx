import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Headers from "./src/components/Headers";
import Screen01 from "./src/screens/Screen01";
import Screen02 from "./src/screens/Screen02";
import Screen03 from "./src/screens/Screen03";
import Screen04 from "./src/screens/Screen04";


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SCREEN_03">
        <Stack.Screen name="SCREEN_01" component={Screen01} options={{
          header: (props) => <Headers title={"Shops Nears Me"} {...props} />
        }}/>
        <Stack.Screen name="SCREEN_02" component={Screen02} options={{
          header: (props) => <Headers title={"Drinks"} {...props} />
        }}/>
        <Stack.Screen name="SCREEN_03" component={Screen03} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="SCREEN_04" component={Screen04} options={{
          header: (props) => <Headers title={"Your orders"} {...props}/>
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
