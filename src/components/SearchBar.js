import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar=({value,setValue,onEditComplete,placeholder})=>{
    return (
        <View style={styles.container}>
            <Feather name="search" size={24} color="black" style={styles.iconStyle}/>
            <TextInput style={styles.InputStyle} value={value} onChangeText={newValue=>setValue(newValue)} placeholder={placeholder}  autoCorrect={false}
            onEndEditing={()=>onEditComplete()} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        height:55,
        borderRadius:10,
        backgroundColor:'grey',
        margin:5
    },
    InputStyle:{
        fontSize:20,
        flex:1
    },
    iconStyle:{
        alignSelf:'center',
        marginHorizontal:10
    }
})

export default SearchBar;