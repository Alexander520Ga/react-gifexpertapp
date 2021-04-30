import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"


export const useFetchGifs = (category:any) => {
  
    const [State, setState] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{

        getGifs(category)
        
        .then((imgs)=>{
            setTimeout(() => {
              
                setState({
                    data:imgs,
                    loading:false
                })
            }, 3000);
                
        })
    },[category])
    
    return State;
}
