import { createStackNavigator } from "@react-navigation/stack";
import { Cam } from "../home/Cam";
import { Home } from "../home/Home";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#232323",
          },
          headerTintColor: "white",
          headerShadowVisible: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="cam"
        component={Cam}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#232323",
          },
          headerTintColor: "white",
          headerShadowVisible: false,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
