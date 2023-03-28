import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView,StyleSheet,Text,View,} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login';
import CrearCuenta from './views/CrearCuenta';
import Main from './views/Main';
import BottonMain from './views/BottonMain';
import Memorama from './JuegosApp/Memorama';
import Busqueda from './JuegosApp/Busqueda';
import Tip1 from './TipsBottom/Tip1';
import Animales from './JuegosApp/Animales';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="crearCuenta" component={CrearCuenta} options={{headerShown: false}} />
          <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="bottonMain" component={BottonMain} options={{headerShown: false}}/>
          <Stack.Screen name="memorama" component={Memorama} options={{headerShown: false}}/>
          <Stack.Screen name="busqueda" component={Busqueda} options={{headerShown: false}}/>
          <Stack.Screen name="tip1" component={Tip1}/>
          <Stack.Screen name="animales" component={Animales} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
