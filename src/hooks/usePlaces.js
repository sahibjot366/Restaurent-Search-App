import React,{useState} from "react";
import places from "../apis/places";

export default ()=>{
    const [venues,setVenue]=useState([])
    const getVenue=async (lat,lon,v,query)=>{
        const response=await places.get('search',{
            params:{
                client_id:'RCEQ1PB2LNVRKKZGGGNKEXMUHQ3ZMZJW0TQ4OE0B5YKATW30',
                client_secret:'ETNBFLP5PIRSGPOO313E4UXDQ2IIUG5PRXHWHI54FMLDLTK1',
                ll:`${lat},${lon}`,
                limit:10,
                v,
                query
            }
        })
        setVenue(response.data.response.venues)
    }
    return [venues,getVenue]; 
}