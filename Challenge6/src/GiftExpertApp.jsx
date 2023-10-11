import { useState } from "react"
import { Addcategory,GifGrid } from "./componentes"

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Zodiac'])

    const onAddcategory = ( categories ) => {
        setcategories( list => [...list, categories])
    }

    return (
        <>
        <h1>GifExpert</h1>
        <Addcategory onAddcategory={onAddcategory} />
        {
            categories.map(
                (categories, key) =>
                {
                    return <GifGrid category={ categories} key={key} />
                }
            )
        }
        </>
    )

}

// import React, { useEffect, useState } from 'react';
// import { useFetchGifs } from '../hooks/useFetchGifs';
// import { GifItem } from './GifItem';

// export const GifGrid = ({ category }) => {
//   const { images, isLoading } = useFetchGifs(category);

//   return (
//     <>
//       <h3>{category}</h3>
//       <div className="card-grid">
//         {images.map((image, key) => {
//           return <GifItem key={key} {...image}></GifItem>;
//         })}
//       </div>
//     </>
//   );
// };







// import { useState } from "react"
// import { Addcategory } from "./componentes/Addcategory"
// import { GifGrid } from "./componentes/GifGrid"

// export const GifExpertApp = () => {

//     const [categories, setcategories] = useState(['Zodiac'])

//     const onAddcategory = ( category ) => {
//         setcategories( list => [...list, category])
//     }

//     return(
//         <>
//         <h1>GifExpert</h1>

//         <Addcategory onAddcategory={onAddcategory} />
//         {
//             categories.map(
//                 (category, key) =>
//                 {
//                     return <GifGrid category={ category } key={key} />
//                 }
//             )
//         }
//         </>
//     )
// }
