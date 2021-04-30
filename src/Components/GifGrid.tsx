import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

     const GifGrid = ({category}:any) => {
        //con los dos puntitos se renombra
         const {data:images,loading}= useFetchGifs( category )


        return (
            <>
            
            <h1 className="animate__animated animate__bounce animate__delay-3s 3s" id="title" >{category}</h1>
            
            
            {loading && <p className="animate__animated animate__flash" id="loading" >Loading...</p>}
                 <div className="card-grid">
            {
            images.map((img:any)=>{
                return <GifGridItem 
                key={img.id} 
                {...img} />
        })
             }
     
            </div>
            
            </>
        )
    }
    export default GifGrid