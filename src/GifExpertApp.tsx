import React, {useState} from "react";
import AddCategoryComponent from "./Components/AddCategoryComponent"
import GifGridComponent from "./Components/GifGrid";



const GifExpertComponent=()=>{

     const [categories, setcategories] = useState(["Bienvenido"])

    // const handleAdd=()=>{
    //     setcategories([...categories,"hunderXhunder"])
    // }

    return(
        <>
       <div className="headIMG">
            <h1 className="GifExpert" >Gif Expert App</h1>
            </div>
                <AddCategoryComponent setCategories={setcategories} />
            <hr/>
           
            <ol> 
                {
                    categories.map(category=>{
                        return <GifGridComponent category={category} key={category}/>
                    })
                }
                
                 </ol>
        </>
    )
}
export default GifExpertComponent