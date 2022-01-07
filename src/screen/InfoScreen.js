import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const InfoScreen=({navigation})=>{
    const item=navigation.getParam('item')
    return (
        
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',alignSelf:'center',marginVertical:10,fontSize:25}}>Details about {item.name}</Text>
            {item.name!=null?<Text style={styles.infoStyle}>Name : {item.name}</Text>:null}
            {item.location.address!=null || item.location.crossStreet!=null?<Text style={styles.infoStyle}>Address : {item.location.address},{item.location.crossStreet}</Text>:null}
            {item.contact!=null?<Text style={styles.infoStyle}>Phone : {item.contact.phone}</Text>:null}
            {item.location.postalCode!=null?<Text style={styles.infoStyle}>Pin Code : {item.location.postalCode}</Text>:null}
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'cyan',
        margin:20,
        justifyContent:'center',
        height:550
    },
    infoStyle:{
        fontSize:20
    }
})
export default InfoScreen;