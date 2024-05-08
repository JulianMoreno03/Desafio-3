import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deportivo from './src/Screens/Categorias/Deporte/Deportivo';
import Hogar from './src/Screens/Categorias/Hogar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Electronico from './src/Screens/Categorias/Electronico';

import { createStackNavigator } from '@react-navigation/stack';
import DetallesProducto from './src/Screens/Categorias/Deporte/DetallesProducto';
import EditProduct from './src/Screens/Categorias/EditProduct';
import AddProduct from './src/Screens/Categorias/AddProduct';
const Tab = createBottomTabNavigator();


const DeportivoStack = createStackNavigator();

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


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Categoria Deportiva' component={DeportivoStackScreen} />
        <Tab.Screen name='Categoria Hogar' component={Hogar} />
        <Tab.Screen name='Categoria Electronico' component={Electronico} />
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
