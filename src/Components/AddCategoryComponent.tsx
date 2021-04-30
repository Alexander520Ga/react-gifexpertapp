import React,{useState} from 'react'

interface ICategoryprops{
    setCategories:any
}
 const AddCategoryComponent = (props:ICategoryprops) => {
     const { setCategories }=props

  const [InputValue, setInputValue] = useState("")

    const handleInputChange=(e:any)=>{
       setInputValue(e.target.value)
    }
     
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        if(InputValue.trim().length > 2){
        setCategories((cats:any) =>[InputValue,...cats])
        setInputValue("")
    }
}
    return (
     <form action="" onSubmit={handleSubmit}>
        <input type="text" value={InputValue} onChange={handleInputChange} className="search" placeholder="Buscar Gif"/>
        </form>
    )
}
export default AddCategoryComponent