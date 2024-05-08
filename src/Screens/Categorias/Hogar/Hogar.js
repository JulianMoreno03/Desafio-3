
import { StyleSheet, Text, View, Button, TouchableOpacity,ScrollView } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import db from '../../../Credenciales/firebase';
import { collection, getDocs, query, doc } from 'firebase/firestore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Header from '../../../Components/Header';

export default function Deportivo() {
    const [items, setItems] = useState([]);
    
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigation = useNavigation()

    const navigateToAddProduct = () => {
        navigation.navigate('AddProductHogar');
    };

    const navigateToDetails = (product) => {
        navigation.navigate('DetallesProductoHogar', { product });
    };
    const fetchItems = async () => {
        const itemsCollection = [];
        const q = query(collection(db, 'productos', 'hogar', 'items'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            itemsCollection.push({ id: doc.id, ...doc.data() });
        });
        setItems(itemsCollection);
        setFilteredProducts(itemsCollection);
    };

    useFocusEffect(
        useCallback(() => {
            fetchItems();
        }, [])
    );

    const handleSearch = (searchQuery) => {
        if (!searchQuery.trim()) {
            setFilteredProducts(items);
            return;
        }
        const filtered = items.filter(item => item.nombre.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredProducts(filtered);
    };

    return (

        <View style={styles.container}>
        <Header onSearch={handleSearch} />
        <TouchableOpacity style={styles.btnBoxAdd} onPress={navigateToAddProduct}>
            <Text style={styles.btnAdd}>Agregar Producto</Text>
        </TouchableOpacity>
        <ScrollView>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <Text style={styles.title}>Nombre: {item.nombre}</Text>
                            <Text style={styles.price}>Precio: ${item.precio}</Text>
                            <TouchableOpacity style={styles.btnDetalle} onPress={() => navigateToDetails(item)}>
                                <Text style={styles.btnText}>Ver Detalles</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noResultsText}> No se ha encontrado ningun producto disponibles.</Text>
                )}
            </ScrollView>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 15,
        marginHorizontal: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    btnDetalle: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnBoxAdd:{
        backgroundColor: '#007BFF',
        padding: 10,
        margin:10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:"center",
        width:'40%',
    },
    btnAdd:{
        color:"white",
        fontWeight: 'bold',
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
        color: '#666',
    }
});