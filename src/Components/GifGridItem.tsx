import React from 'react'

 const GifGridItem = ({title,url}:any) => {
     
    return (
        <div  className="card animate__animated animate__rubberBand ">
         <img src={url} alt={title}/>
         
        </div>
    )
}
export default GifGridItem
