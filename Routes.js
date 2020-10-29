import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import DetailScreen from "./screens/Detail";

const NavigationOptions = {
  headerShown: false
};
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
