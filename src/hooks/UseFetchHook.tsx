'use client'
import { Game } from "@/Models";
import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchData = (options:any) => {
    const [data,setData] = useState([]);
    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{    
                    const response = await axios.request(options);
                    const data = await response.data;
                    console.log("here")
                    console.log(data);
                    setData(response.data);
                }
               catch(error){    
                    console.log(error);
               }
            }
            fetchData();
        },
        []
    );
    return data;
}
 