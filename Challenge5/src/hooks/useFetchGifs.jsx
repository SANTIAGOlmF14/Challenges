import { useEffect, useState } from "react"
import getGifs from "../Helpers/GetGifs";
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs( category )
        setImages( images );
    }

    useEffect( () => {
        getImages();
    }, [])

    return{
        images: images,
        isoading: false
    }
}