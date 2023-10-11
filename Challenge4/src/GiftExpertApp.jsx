 import { useState } from "react"
 import { Addcategory,GifGrid } from "./componentes"

 export const GifExpertApp = () => {

     const [categories, setcategories] = useState(['Zodiac'])

     const onAddcategory = ( category ) => {
         setcategories( list => [...list, category])
     }

     return(
         <>
         <h1>GifExpert</h1>

         <Addcategory onAddcategory={onAddcategory} />
         {
             categories.map(
                 (category, key) =>
                 {
                     return <GifGrid category={ category } key={key} />
                 }
             )
         }
         </>
     )
 }
