import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    return(
        <>
            <h3> { category }</h3>
            <div className="card-grid">
                {
                    images.map((image, key) =>{
                        return <GifItem key = {key} {...image}></GifItem>
                    })
                }
            </div>
        </>
    )
}




// const getGifs = async ( category) => {
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=WrE2EUSk6clZuG971XKCDsovS5Im1AOF&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips` 
//     const resp = await fetch( url )
//     const { data } = await resp.json()
//     const gifs = data.map( img => {
//         return {
//             id : img.id,
//             title: img.title,
//             url: img.images.fixed_height_downsampled.url
//         }
//     })

//         return gifs
// }


// export const GifGrid = ({category}) =>{

//     getGifs( category )
//     return (
//         <>
//         <h3> { category }</h3>
//         <p> Hello Word </p>
        
//         </>
//     )
    
// }