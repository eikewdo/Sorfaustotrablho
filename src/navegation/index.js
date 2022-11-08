import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EWfeedback from "../screens/feedback";
import { Home } from "../screens/home";
import {EWinfo} from "../screens/info"
import FetchNews from "../screens/noticia";




// Simboliza a instância do Stack
const Stack = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#ff00ff' }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
       options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
         ),
       }}
      />
      <Stack.Screen
        name="info"
        component={EWinfo}
       options={{
         tabBarLabel:'info',
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="skateboard" color={color} size={26} />
         ),
       }}
      />
      
      <Stack.Screen
        name="Noticia"
        component={FetchNews}
       options={{
         tabBarLabel: 'Noticia',
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="watch" color={color} size={26} />
         ),
       }}
      />
      
       <Stack.Screen
        name="feedback"
        component={EWfeedback}
      options={{
        tabBarLabel: 'feedback',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="android" color={color} size={26} />
       ),
       }}
      /> 
    </Stack.Navigator>
  )
}