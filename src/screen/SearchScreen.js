import React,{useState} from 'react';
import {Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import useLocation from '../hooks/useLocation';
import usePlaces from '../hooks/usePlaces';
import ListVal from '../components/ListVal'

const SearchScreen=({navigation})=>{
    const [loc,getLocation]=useLocation() //loc is the object containg name,latitude and longitude of searched city
    const [venues,getVenue]=usePlaces() //venues is array of objects containg info about each found location
    const [city,setCity]=useState('') //city is what user will enter in text input 1
    const [item,setItem]=useState('') //item is what user will enter in text input 2
    const {lat,lon}=loc; //obtaing lat and lon by object destructuring 
    
    const randomColorGeneration=()=>{
        const r=Math.floor(Math.random() * 255);
        const g=Math.floor(Math.random() * 255);
        const b=Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    }
    const list=<FlatList style={styles.listStyle} data={venues} keyExtractor={item=>item.id} renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('Info',{'item':item})} >
                    <ListVal name={item.name} location={item.location.address} street={item.location.crossStreet} color={randomColorGeneration()}/>
                </TouchableOpacity>
                )
        }} />
    return (
        <>
            <SearchBar value={city} setValue={newValue=>setCity(newValue)} onEditComplete={()=>getLocation(city)} placeholder='Enter your city'/>
            <SearchBar value={item} setValue={newValue=>setItem(newValue)} onEditComplete={()=>getVenue(lat,lon,'20210904',item)} placeholder='Enter item' />
            {item==''?null:<Text style={{fontWeight:'bold',margin:10}}>Showing results for "{item}"</Text>}
            {venues.length? list:null}
        </>
    )
}

const styles=StyleSheet.create({
    listStyle:{
        margin:10
    }
})

export default SearchScreen;