import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import ProductInfo from "./components/screens/ProductInfo";
import Cart from "./components/screens/MyCart";


export default function App() {
  const Stack = new createNativeStackNavigator();
  return (

      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{headerShown: false,}}
          >
              <Stack.Screen name={"Home"} component={Home} />
              <Stack.Screen name={"Product Info"} component={ProductInfo} />
              <Stack.Screen name={"Cart"} component={Cart} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8ffb3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
