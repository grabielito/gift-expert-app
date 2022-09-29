
export const getGrids=async({category})=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=CPHCtCW3kg9oM5S9kzkLwIg6TVJz6EKE&q=${ encodeURI(category) }&limit=10`;
    const resp= await fetch(url);
    const {data}=await resp.json();
    const gifs= data.map( img=> {
      return {
        id:img.id,
        title:img.title,
        url:img.images?.downsized_medium.url
      }
    }

    )

    return gifs;
    
}