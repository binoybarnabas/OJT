'use client'
import { Game } from "@/Models";
import { useAxios } from "./axios";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (options:any) => {
    const {get} = useAxios();
    const [data,setData] = useState([]);
    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{    
                    // const response = await axios.request(options);
                    // const data = await response.data;
                    const data = await get(options.url,options)
                    setData(data)
                
                }
               catch(error){    
                    throw new Error("Data cannot be fetched properly :(")
                    console.log(error);
               }
            }
            fetchData();
        },
        []
    );
    return data;
}
 