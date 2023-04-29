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
import Animales from './JuegosApp/Animales';
import Tip1 from './TipsBottom/Tip1';
import Tip2 from './TipsBottom/Tip2';
import Tip3 from './TipsBottom/Tip3';
import Tip4 from './TipsBottom/Tip4';
import Tip5 from './TipsBottom/Tip5';
import Tip6 from './TipsBottom/Tip6';
import Tip7 from './TipsBottom/Tip7';
import Tip8 from './TipsBottom/Tip8';
import Tip9 from './TipsBottom/Tip9';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={{headerShown: false, gestureEnabled: false, headerLeft: () => <></>}} />
          <Stack.Screen name="crearCuenta" component={CrearCuenta} options={{headerShown: false}} />
          <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="bottonMain" component={BottonMain} options={{headerShown: false}}/>
          <Stack.Screen name="memorama" component={Memorama} options={{headerShown: false}}/>
          <Stack.Screen name="busqueda" component={Busqueda} options={{headerShown: false}}/>
          <Stack.Screen name="Consejo1" component={Tip1}/>
          <Stack.Screen name="Consejo2" component={Tip2}/>
          <Stack.Screen name="Consejo3" component={Tip3}/>
          <Stack.Screen name="Consejo4" component={Tip4}/>
          <Stack.Screen name="Consejo5" component={Tip5}/>
          <Stack.Screen name="Consejo6" component={Tip6}/>
          <Stack.Screen name="Consejo7" component={Tip7}/>
          <Stack.Screen name="Consejo8" component={Tip8}/>
          <Stack.Screen name="Consejo9" component={Tip9}/>
          <Stack.Screen name="animales" component={Animales} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
