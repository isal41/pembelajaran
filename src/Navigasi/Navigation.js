import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Start from '../scren/Start';
import Menu from '../scren/Menu';
import Warna from '../scren/Warna';
import Bentuk from '../scren/Bentuk';
import Huruf from '../scren/Huruf';
import Angka from '../scren/Angka';
import Hewan from '../scren/Hewan';
import Info from '../scren/Info';
import NextHewan from '../scren/NextHewan';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Warna" component={Warna} />
        <Stack.Screen name="Bentuk" component={Bentuk} />
        <Stack.Screen name="Huruf" component={Huruf} />
        <Stack.Screen name="Angka" component={Angka} />
        <Stack.Screen name="Hewan" component={Hewan} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="NextHewan" component={NextHewan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
