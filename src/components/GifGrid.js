import React, { useEffect, useState } from 'react'
import { getGrids } from '../Helpers/GetGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
  const [images, setimages] = useState([]);
  
 useEffect(() => {
  getGrids(category).then(setimages);
 },[category])
 console.log(images)
  return (
    <><h3>{category}</h3>
    <div className='card-grid'>
        
        
          {images.map((img)=> 
            <GifGridItem
              key={img.id}
              {...img}
            />
            
            
          )}
       
    </div>
    </>
  )
}

export default GifGrid