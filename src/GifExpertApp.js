import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setcategories] = useState([]);

    const handleAdd=()=>{
        setcategories([...categories,'gabo']);
    }
  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={
          setcategories
        }
                     Categories={categories} 
        />
        <hr/>
        <button onClick={handleAdd}>agregar</button>
        <ol>
        {
            categories.map((category)=><GifGrid
             key={category} 
             category={category}/>)
        }
        </ol>
        
    </div>
  )
}

export default GifExpertApp