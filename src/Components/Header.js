import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity,Image } from 'react-native';
import login from '../img/login.png'



export default function Header({ onSearch}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const handleSearchPress = () => {
        onSearch(searchQuery);
    };

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity >
                <Image
                    source={login}  
                    style={styles.userManageIcon}
                />
            </TouchableOpacity>
            <TextInput
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={handleSearchChange}
                placeholder="Buscar..."
                placeholderTextColor="#666"
            /> 
            <Button
            title="Buscar"
            onPress={handleSearchPress}
        />

        </View>
    );
}
const styles = StyleSheet.create({
    headerContainer: {
        height:120,
        width:"100%",
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',  
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,  
    },
    searchInput: {
        flex: 2,  
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        marginRight: 10,  
    },
    userManageIcon: {
        width: 80,
        height: 80,
    }
});