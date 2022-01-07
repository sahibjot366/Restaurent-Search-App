import React,{useState} from 'react';
import location from '../apis/location';
export default ()=>{
    const [loc,setLoc]=useState({name:'',lat:'',lon:''})
    const getLocation=async city=>{
        const response= await location.get('direct',{
            params:{
                q:city,
                appid:'42bed5081194f2c724235481f8d90139'
            }
        })
        setLoc(response.data[0])
    }
    return [loc,getLocation];
}
