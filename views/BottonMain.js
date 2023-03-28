import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text,StyleSheet,View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Inicio from './Tabs/Inicio';
import Tips from './Tabs/Tips';
import Juegos from './Tabs/Juegos';
import Perfil from './Tabs/Perfil';
import Chat from './Tabs/Chat';

const Tab= createBottomTabNavigator();
const BottonMain = () => {
    return(
       <Tab.Navigator
       screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Tips') {
            iconName = focused ? 'happy' : 'happy-outline';
          } else if (route.name === 'Juegos') {
            iconName = focused ? 'rocket' : 'rocket-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#87cefa',
        tabBarInactiveTintColor: 'black',
      })}
       >
            <Tab.Screen name="Inicio" component={Inicio}/>
            <Tab.Screen name="Tips" component={Tips}/>
            <Tab.Screen name="Juegos" component={Juegos}/>
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
       </Tab.Navigator>
    );
}
export default BottonMain;

