import React from "react";
import HomeScreen from "./screens/HomeScreen";
import BasketScreen from "./screens/BasketScreen";
import DeliveryOrderScreen from "./screens/DeliveryOrderScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen}options={{┬ápresentation:"modal",headerShown:false}} />
        <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen}options={{┬ápresentation:"fullScreenModal",headerShown:false}} />
        <Stack.Screen name="Delivery" component={DeliveryOrderScreen}options={{┬ápresentation:"fullScreenModal",headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
