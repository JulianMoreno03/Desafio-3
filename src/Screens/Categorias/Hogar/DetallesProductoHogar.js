
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import db from '../../../Credenciales/firebase'; 
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function DetallesProductoHogar(){
    const route = useRoute();
    const { product } = route.params;
    const navigation = useNavigation()

    const handleEditPress = () => {
      // Navegación a la pantalla de edición
      navigation.navigate('EditProductHogar', { product });
  };
     
    return(
      <View style={styles.container}>
      <View style={styles.card}>
          <Text style={styles.title}>Nombre: {product.nombre}</Text>
          <Text style={styles.description}>Descripción: {product.descripcion}</Text>
          <Text style={styles.price}>Precio: ${product.precio}</Text>
          <Button 
                  title="Editar Detalles"
                  onPress={handleEditPress}
              />
      </View>
  </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f0f0f0',  
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,  
  },
  card: {
      backgroundColor: '#fff',
      borderRadius: 10,  
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,  
      padding: 20,
      width: '100%',  
      maxWidth: 600,  
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10, 
  },
  description: {
      fontSize: 16,
      color: '#666', 
      marginBottom: 10,  
  },
  price: {
      fontSize: 18,
      color: '#333', 
      fontWeight: 'bold',  
  }
});