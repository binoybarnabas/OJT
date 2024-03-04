import axios, { AxiosRequestConfig } from "axios"
import { useCallback } from "react"

export const useAxios = ()=>{
const getToken = ()=> 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


const getApiConfig = useCallback(
    (axiosConfig?: AxiosRequestConfig): AxiosRequestConfig => {
      const token = getToken();

      const config = {
        //baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      };
      return axiosConfig ? { ...config, ...axiosConfig } : config;
    }, 
    [],
  );

  const request = useCallback(
    async(url:string,method:string,data?:any,axiosConfig?:AxiosRequestConfig)=>{
        const config = getApiConfig(axiosConfig)
        console.log("***config***")
        console.log(config)
        try{
            const response = await axios({ 
                url:url,
                method:method,
                data:data,
                ...config
            });
            return response.data;
        }
        catch(error:any){
            console.log(error);
        }
        finally{
            console.log("done")
        }
    },
    [getApiConfig]
  );

  const get = useCallback(
    async(url:string,axiosConfig?:AxiosRequestConfig)=>{
        return await request(url,'GET',null,axiosConfig);
    },
    [request]
  );

  return {get};

}