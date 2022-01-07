import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const ListVal=({name,location,color,street})=>{
    return (
    <View style={{ height:80, backgroundColor:color,justifyContent:'center',borderRadius:2}}>
        {name!=null?<Text style={{fontWeight:'bold'}}>{name}</Text>:null}
        {location!=null?<Text style={{fontWeight:'bold'}}>{location},{street}</Text>:null}
    </View>
    )
}

const styles=StyleSheet.create({})

export default ListVal;