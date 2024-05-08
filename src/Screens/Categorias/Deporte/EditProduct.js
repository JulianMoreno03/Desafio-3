import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,ScrollView  ,KeyboardAvoidingView,Platform, Text, Alert} from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../../../Credenciales/firebase';

export default function EditProduct({ route, navigation }) {
    const { product } = route.params;
    const [name, setName] = useState(product.nombre);
    const [description, setDescription] = useState(product.descripcion);
    const [price, setPrice] = useState(product.precio.toString());

    const handleSave = async () => {

        const productRef = doc(db, 'productos', 'deporte', 'items', product.id);
        
        try {
            // Actualizar el documento
            await updateDoc(productRef, {
                nombre: name,
                descripcion: description,
                precio: parseFloat(price) //Convertimos el precio
            });
            // Navegar hacia atrás tras la actualización exitosa
            Alert.alert("Producto Modificado con exito")
            navigation.navigate('Deportivo');
        } catch (error) {
            // Manejar cualquier error que ocurra durante la actualización
            console.error("Error al actualizar el producto: ", error);
        }
    };

    return (
       
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Nombre del producto</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ingrese el nombre del producto"
            />
            <Text style={styles.label}>Descripción del producto</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Ingrese una descripción"
                multiline
            />
            <Text style={styles.label}>Precio del producto</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Ingrese el precio"
                keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <Button title="Guardar Cambios" onPress={handleSave} color="#007BFF" />
            </View>
        </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',  
},
input: {
    backgroundColor: '#fff',  
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 5,  
    padding: 10,
    fontSize: 16,
    marginBottom: 15,  
},
label: {
    fontSize: 18,
    color: '#333',  
    marginBottom: 5,
    fontWeight: 'bold',  
},
buttonContainer: {
    marginTop: 20,  
}
});