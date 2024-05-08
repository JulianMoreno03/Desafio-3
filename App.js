import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deportivo from './src/Screens/Categorias/Deporte/Deportivo';
import Hogar from './src/Screens/Categorias/Hogar/Hogar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Electronico from './src/Screens/Categorias/Electronico/Electronico';

import { createStackNavigator } from '@react-navigation/stack';
import DetallesProducto from './src/Screens/Categorias/Deporte/DetallesProducto';
import EditProduct from './src/Screens/Categorias/Deporte/EditProduct';
import AddProduct from './src/Screens/Categorias/Deporte/AddProduct';
import DetallesProductoHogar from './src/Screens/Categorias/Hogar/DetallesProductoHogar';
import EditProductHogar from './src/Screens/Categorias/Hogar/EditProductoHogar';
import AddProductHogar from './src/Screens/Categorias/Hogar/AddProductHogar';
import DetallesProductoElectro from './src/Screens/Categorias/Electronico/DetallesProductoElectro';
import AddProductoElectro from './src/Screens/Categorias/Electronico/AddProductoElectro';
import EditProductoElectro from './src/Screens/Categorias/Electronico/EditProductoElectro';


const Tab = createBottomTabNavigator();

const DeportivoStack = createStackNavigator();
const HogarStack = createStackNavigator();
const ElectronicoStack = createStackNavigator();
const AuthStack = createStackNavigator();


function DeportivoStackScreen() {
  return (
    <DeportivoStack.Navigator>
  
      <DeportivoStack.Screen
        name="Deportivo" component={Deportivo} options={{ headerShown: false }}
      />
      <DeportivoStack.Screen
        name="DetallesProducto" component={DetallesProducto} options={{ headerShown: false }}
      />
      <DeportivoStack.Screen
        name="EditProduct" component={EditProduct} options={{ headerShown: true, title: "Editar Producto" }}
      />
      <DeportivoStack.Screen
        name="AddProduct" component={AddProduct} options={{ headerShown: true, title: "Agregar Producto" }}
      />
    </DeportivoStack.Navigator>
  );
}


function HogarStackScreen() {
  return (
    <HogarStack.Navigator>
      <HogarStack.Screen
        name="Hogar" component={Hogar} options={{ headerShown: false }}
      />
      <HogarStack.Screen
        name="DetallesProductoHogar" component={DetallesProductoHogar} options={{ headerShown: false }}
      />
      <HogarStack.Screen
        name="EditProductHogar" component={EditProductHogar} options={{ headerShown: false }}
      />
      <HogarStack.Screen
        name="AddProductHogar" component={AddProductHogar} options={{ headerShown: true, title: "Agregar Producto" }}
      />
    </HogarStack.Navigator>
  );
}


function ElectronicoStackScreen() {
  return (
    <ElectronicoStack.Navigator>
      <ElectronicoStack.Screen
        name="Electronico" component={Electronico} options={{ headerShown: false }}
      />
       <ElectronicoStack.Screen
        name="DetallesProductoElectro" component={DetallesProductoElectro} options={{ headerShown: false }}
      />
       <ElectronicoStack.Screen
        name="AddProductoElectro" component={AddProductoElectro} options={{ headerShown: true, title: "Agregar Producto" }}
      />
       <ElectronicoStack.Screen
        name="EditProductoElectro" component={EditProductoElectro} options={{ headerShown: true, title: "Agregar Producto" }}
      />
    </ElectronicoStack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Categoria Deportiva' component={DeportivoStackScreen} />
          <Tab.Screen name='Categoria Hogar' component={HogarStackScreen} />
          <Tab.Screen name='Categoria Electronico' component={ElectronicoStackScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
