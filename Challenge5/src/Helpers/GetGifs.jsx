const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WrE2EUSk6clZuG971XKCDsovS5Im1AOF&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips` 

    const resp = await fetch ( url )
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url: img.images.original.url
        }
    })

    return gifs
}

export default getGifs;