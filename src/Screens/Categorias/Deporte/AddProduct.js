import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import db from '../../../Credenciales/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddProduct({ navigation }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSave = async () => {
        if (name && description && price) {
            await addDoc(collection(db, 'productos', 'deporte', 'items'), {
                nombre: name,
                descripcion: description,
                precio: parseFloat(price)
            });
            navigation.goBack();
        } else {
            alert('Por favor rellena todo');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre del Producto"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Button title="Guardar Producto" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    }
});

